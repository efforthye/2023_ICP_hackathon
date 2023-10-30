import {
    text,
    nat64,
    Record,
    Vec,
    Opt,
    update,
    ic,
    bool,
    StableBTreeMap,
    Canister,
    Principal,
    Err,
    Ok,
    Result,
    Variant,
    query,
    int8,
} from 'azle';

import TokenCanister from './token';
const TOKENADDRESS = 'avqkn-guaaa-aaaaa-qaaea-cai';

const User = Record({
    /*
     * id: 유저를 구분하는 id값, principal(address)
     * createdAt: 유저 생성 날짜
     * publishingChallengeIds: 유저가 발행한 챌린지 목록
     * participatingChallengeIds: 유저가 참가중인 챌린지 목록
     * completedChallengeIds: 유저가 완료한(보상까지 받은) 챌린지 목록
     * username: 유저이름
     **/
    id: Principal,
    createdAt: nat64,
    publishChallengeIds: Vec(Principal),
    participateChallengeIds: Vec(Principal),
    rewardedChallengeIds: Vec(Principal),
    username: text,
});

const Response = Record({
    /*
     * id: 응답 아이디 값
     * title: 응답 제목
     * contents: 응답 내용
     * responderId: 응답자
     * chosen: 채택여부
     **/
    id: int8,
    title: text,
    contents: text /*? blob */,
    responderId: Principal,
    chosen: bool,
});

const Challenge = Record({
    /*
     * id: 챌린지를 구분하는 id값
     * title: 챌린지 제목
     * description: 챌린지 설명
     * reward: 챌린지 보상
     * responses: 챌린지 응답 목록
     * rewarded: 챌린지
     * ongoing: 현재 챌린지가 진행중인지, 진행중이면 true
     * createdAt: 챌린지를 만든 시간
     * creator: 챌린지 만든 사람(owner)
     * deadline: 챌린지 마감 시간
     **/
    id: Principal, // Unique challenge Id
    title: text, // Title of the challenge
    description: text, // Description of the challenge
    reward: nat64, // Reward for completing the challenge
    responses: Vec(Response), // Responses in the challenge
    completed: Vec(User), // Users who completed the challenge, 보상 받을 예정 목록 한 명 골라야 함.
    ongoing: bool, // Whether the challenge is ongoing
    createdAt: nat64, // The time the challenge was created
    creator: Principal, // The creator of the challenge
    deadline: nat64,
});

// 발생 가능한 에러 목록.
const ChallengeError = Variant({
    ChallengeDoesNotExist: Principal,
    ChallengeNotFinished: Principal,
    ChallengeFinished: Principal,
    UserDoesNotExist: Principal,
    UserNotParticipant: Principal,
    UserNotCreator: Principal,
    UserAlreadyExist: Principal,
    InsufficientToken: Principal,
    ResponseDoesNotExist: int8,
    CreatorNotEnoughBalance: Principal,
    AlreadyParticipated: Principal,
    InvalidUser: Principal,
    ConnectionError: Principal,
});

const TokenError = Variant({
    OnlyAdminAccess: Principal,
    AccountDoesNotExist: Principal,
    InsufficientToken: Principal,
});

/* stable memory */
let users = StableBTreeMap(Principal, User, 0);
let challenges = StableBTreeMap(Principal, Challenge, 1);
//token캐니스터 주소
const tokenCanisterAddress = TokenCanister(Principal.fromText(TOKENADDRESS));

export default Canister({
    createUser: update([text], Result(Principal, ChallengeError), async (username) => {
        const id = getCaller();
        try {
            const account = await _connectAccount(id); // createAccount랑 같음
            if (!account) {
                return Err({
                    InvalidUser: id,
                });
            }
            const userOpt = users.get(id);
            //user 없으면 생성
            if ('None' in userOpt) {
                const user: typeof User = {
                    id,
                    createdAt: ic.time(),
                    publishChallengeIds: [],
                    participateChallengeIds: [],
                    rewardedChallengeIds: [],
                    username,
                };
                users.insert(user.id, user);
                return Ok(user.id);
            } else {
                return Err({
                    UserAlreadyExist: id,
                });
            }
        } catch (err) {
            return Err({
                ConnectionError: id,
            });
        }
    }),
    readUsers: query([], Vec(User), () => {
        return users.values();
    }),
    readUserById: query([Principal], Opt(User), (id) => {
        return users.get(id);
    }),
    deleteUser: update([Principal], Result(User, ChallengeError), (id) => {
        const caller = getCaller();
        if (caller !== id) {
            return Err({
                InvalidUser: id,
            });
        }
        const userOpt = users.get(id);

        if ('None' in userOpt) {
            return Err({
                UserDoesNotExist: id,
            });
        }

        const user = userOpt.Some;
        // 유저가 만든 챌린지를 모두 삭제
        for (const challengeId of user.publishChallengeIds) {
            const challengeOpt = challenges.get(challengeId);
            if ('None' in challengeOpt) {
                continue;
            }
            const challenge = challengeOpt.Some;
            if (!challenge.ongoing) {
                return Err({
                    ChallengeNotFinished: challengeId,
                });
            }
            challenges.remove(challengeId);
        }

        // 유저가 참여하고 있는 챌린지에서 response 삭제
        for (const challengeId of user.participateChallengeIds) {
            const challengeOpt = challenges.get(challengeId);
            if ('None' in challengeOpt) {
                continue;
            }
            const challenge = challengeOpt.Some;
            const updatedResponses = challenge.responses.filter((response) => response.responderId !== id);
            challenges.insert(challengeId, {
                ...challenge,
                responses: updatedResponses,
            });
        }

        // 유저 delete
        users.remove(id);
        return Ok(user);
    }),
    createChallenge: update(
        [text, text, nat64, nat64],
        Result(Principal, ChallengeError),
        async (title, description, reward, deadline) => {
            const caller = getCaller();
            const challengeId = generateId();
            const createdAt = ic.time();
            const newChallenge = {
                id: challengeId,
                title,
                description,
                reward,
                responses: [],
                completed: [],
                ongoing: true,
                createdAt,
                creator: caller,
                deadline,
            };

            try {
                const userOpt = users.get(caller);
                if ('None' in userOpt) {
                    return Err({
                        UserDoesNotExist: caller,
                    });
                }
                const success = await _payRewardToken(caller, reward);
                if (success.Err) {
                    return Err({
                        InsufficientToken: caller,
                    });
                }
                // challenge 추가
                challenges.insert(challengeId, newChallenge);
                const user = userOpt.Some;
                // user publishing에 new challenge push
                user.publishChallengeIds.push(challengeId);
                users.insert(user.id, user);
                // deadline만큼의 시간이 지나면 expireChallenge를 호출하는 타이머 설정
                // TODO - test 되는지 꼭 해봐야함.
                const timerDuration = deadline;
                const expiredId = challengeId;
                ic.setTimer(timerDuration, async () => {
                    await _expireChallenge(expiredId);
                });
                return Ok(challengeId); // Return challenge ID
            } catch (err) {
                return Err({
                    ConnectionError: caller,
                });
            }
        }
    ),
    joinChallenge: update([text, text, Principal], Result(bool, ChallengeError), (title, contents, challengeId) => {
        const caller = getCaller();
        const userOpt = users.get(caller);
        // caller가 유저가 아니라면 Err
        if ('None' in userOpt) {
            return Err({
                UserDoesNotExist: caller,
            });
        }
        const user = userOpt.Some;
        // 챌린지 없으면 Error
        const challengeOpt = challenges.get(challengeId);
        if ('None' in challengeOpt) {
            return Err({
                ChallengeDoesNotExist: challengeId,
            });
        }
        // 챌린지 ongoing이 아니면 Error
        const challenge = challengeOpt.Some;
        if (!challenge.ongoing) {
            return Err({
                ChallengeFinished: challengeId,
            });
        }
        // 챌린지 publisher라면 Error
        if (caller === challenge.creator) {
            return Err({
                InvalidUser: caller,
            });
        }
        const id = challenge.responses.length + 1;
        console.log('챌린지에 대한 response 개수:' + id);
        const newResponse = {
            id, // 응답 ID 생성.
            title, // 실제로 사용자의 응답 제목 필요
            contents, // 실제로 사용자의 응답 내용 필요
            responderId: caller,
            chosen: false,
        };
        //response push
        challenge.responses.push(newResponse);
        challenges.insert(challengeId, challenge);
        //해당 user의 participating response 추기
        user.participateChallengeIds.push(challengeId);
        users.insert(user.id, user);
        return Ok(true);
    }),
    rewardParticipant: update([Principal, int8], Result(bool, ChallengeError), async (challengeId, responseId) => {
        const caller = getCaller();
        //챌린지 없으면 Err
        const challengeOpt = challenges.get(challengeId);
        if ('None' in challengeOpt) {
            return Err({
                ChallengeDoesNotExist: challengeId,
            });
        }
        //챌린지 ongoing이 false면
        const challenge = challengeOpt.Some;
        if (!challenge.ongoing) {
            return Err({
                ChallengeFinished: challengeId,
            });
        }
        //챌린지 소유자가 아니면 Err
        if (caller.toString() !== challenge.creator.toString()) {
            return Err({
                UserNotCreator: caller,
            });
        }
        try {
            //채택하기
            const adoptResponse = challenge.responses.find((response) => response.id === responseId);
            if (!adoptResponse) {
                return Err({
                    ResponseDoesNotExist: responseId,
                });
            }
            const rewardedUserOpt = users.get(adoptResponse.responderId);
            //rewardedUser가 없다면, Error
            if ('None' in rewardedUserOpt) {
                return Err({
                    UserDoesNotExist: adoptResponse.responderId,
                });
            }
            const rewardedUser = rewardedUserOpt.Some;

            const transfer = await _transferReward(rewardedUser.id, challenge.reward);
            if (!transfer) {
                return Err({
                    InvalidUser: rewardedUser.id,
                });
            }
            challenge.ongoing = false;
            rewardedUser.rewardedChallengeIds.push(challenge.id);
            challenge.completed.push(rewardedUser);
            challenges.insert(challengeId, challenge);
            users.insert(rewardedUser.id, rewardedUser);
        } catch (err) {
            return Err({
                ConnectionError: challengeId,
            });
        }

        return Ok(true);
    }),
    getChallenges: query([], Vec(Challenge), () => {
        return challenges.values();
    }),
    getChallengesByParticipant: query([], Vec(Challenge), () => {
        const user = getCaller();
        const challengesByParticipant = challenges
            .values()
            .filter((challenge) => challenge.responses.some((response) => response.responderId === user));
        return challengesByParticipant;
    }),
    // 자기가 만든 챌린지 목록 반환하는 method
    getChallengesByCreator: query([], Vec(Challenge), () => {
        const user = getCaller();
        const challengesByCreator = challenges.values().filter((challenge) => challenge.creator === user);
        return challengesByCreator;
    }),

    // 전체 챌린지 목록을 reward가 높은 순으로 반환하는 method (20개씩 offset으로 페이징)
    getChallengesByReward: query([nat64, nat64], Vec(Challenge), (offset, limit) => {
        const challengesByReward = challenges.values().sort((a, b) => Number(b.reward) - Number(a.reward));
        return challengesByReward.slice(Number(offset), Number(offset + limit));
    }),

    // 전체 챌린지 목록을 남은 기간 순으로 반환하는 method (20개씩 offset으로 페이징)
    getChallengesByDate: query([nat64, nat64], Vec(Challenge), (offset, limit) => {
        const challengesByDate = challenges.values().sort((a, b) => Number(a.deadline) - Number(b.deadline));
        return challengesByDate.slice(Number(offset), Number(offset + limit));
    }),

    // 전체 챌린지 목록을 참여자 수 순으로 반환하는 method (20개씩 offset으로 페이징)
    getChallengesByParticipants: query([nat64, nat64], Vec(Challenge), (offset, limit) => {
        const challengesByParticipants = challenges.values().sort((a, b) => b.responses.length - a.responses.length);
        return challengesByParticipants.slice(Number(offset), Number(offset + limit));
    }),
});

function getCaller(): Principal {
    const caller = ic.caller();
    if (caller === null) {
        throw new Error('Caller is null');
    }
    return caller;
}

// Principal 이용을 위한 임의의 함수
function generateId(): Principal {
    const randomBytes = new Array(29).fill(0).map((_) => Math.floor(Math.random() * 256));
    return Principal.fromUint8Array(new Uint8Array(randomBytes));
}

//추가
async function _transferReward(to: Principal, amount: nat64): Promise<Result<boolean, typeof TokenError>> {
    return await ic.call(tokenCanisterAddress.transferReward, {
        args: [to, amount],
    });
}
//추가
async function _connectAccount(id: Principal): Promise<boolean> {
    return await ic.call(tokenCanisterAddress.connectAccount, {
        args: [id],
    });
}
//추가
async function _payRewardToken(from: Principal, amount: nat64): Promise<Result<boolean, typeof TokenError>> {
    return await ic.call(tokenCanisterAddress.payToAdmin, {
        args: [from, amount],
    });
}

async function _expireChallenge(challengeId: Principal): Promise<Result<true, typeof ChallengeError>> {
    const challengeOpt = challenges.get(challengeId);
    if ('None' in challengeOpt) {
        return Err({
            ChallengeDoesNotExist: challengeId,
        });
    }

    const challenge = challengeOpt.Some;

    try {
        // 보상 분배 로직
        if (challenge.responses.length > 0) {
            const rewardPerParticipant = Number(challenge.reward) / challenge.responses.length;
            // 챌린지의 모든 응답을 순회하면서 참여자에게 보상 분배
            for (const response of challenge.responses) {
                const participantId = response.responderId;
                await _transferReward(participantId, BigInt(rewardPerParticipant));
            }
        }
        // 만약 아무도 안달면 환불
        else {
            await _transferReward(challenge.creator, challenge.reward);
        }
        challenge.ongoing = false;
        challenges.insert(challengeId, challenge);
        console.log('만료된 챌린지 handling 완료!');
        return Ok(true);
    } catch (err) {
        return Err({
            ConnectionError: challengeId,
        });
    }
}
