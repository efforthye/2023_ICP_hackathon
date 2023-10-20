import { text, nat64, Record, Vec, Opt, update, ic, bool, StableBTreeMap, Canister } from 'azle';

export const Challenge = Record({
    id: text, // Unique challenge ID
    title: text, // Title of the challenge
    description: text, // Description of the challenge
    reward: nat64, // Reward for completing the challenge
    participants: Vec(text), // Participants in the challenge
    completed: Vec(text), // Users who completed the challenge
    creator: text, // The creator of the challenge
    createdAt: text,
});

let challenges = StableBTreeMap(text, Challenge, 0);

function getCaller(): string {
    const caller = ic.caller().toString();
    if (caller === null) {
        throw new Error('Caller is null');
    }
    return caller;
}

export default Canister({
    createChallenge: update([text, text, nat64], text, (title, description, reward) => {
        const id = Math.random().toString(36).substring(2); // Create a random unique ID
        const creator = getCaller();
        const timestamp = Date.now();
        const date = new Date(timestamp);
        const newChallenge = {
            id,
            title,
            description,
            reward,
            participants: [],
            completed: [],
            date,
        };

        challenges.insert(id, newChallenge);
        return id; // Return challenge ID
    }),

    joinChallenge: update([text], bool, (challengeId) => {
        const user = getCaller();

        const challengeOpt = challenges.get(challengeId);
        if ('None' in challengeOpt) {
            return false;
        }

        const challenge = challengeOpt.Some;
        if (challenge.participants.indexOf(user) === -1) {
            challenge.participants.push(user);
            challenges.insert(challengeId, challenge);
        }

        return true;
    }),

    completeChallenge: update([text], bool, (challengeId) => {
        const user = getCaller();

        const challengeOpt = challenges.get(challengeId);
        if ('None' in challengeOpt) {
            return false;
        }

        const challenge = challengeOpt.Some;
        if (challenge.completed.indexOf(user) === -1) {
            challenge.completed.push(user);
            challenges.insert(challengeId, challenge);
        }

        return true;
    }),

    rewardParticipants: update([text], bool, (challengeId) => {
        const user = getCaller();

        const challengeOpt = challenges.get(challengeId);
        if ('None' in challengeOpt) {
            return false;
        }

        const challenge = challengeOpt.Some;
        if (challenge.creator !== user) {
            throw new Error('Only challenge creators can reward participants.');
        }

        // Logic to distribute rewards to participants using token canister's transfer function
        // For this example, I'll pseudocode it as it will depend on the token canister's API.
        /*
        for (let participant of challenge.completed) {
            tokenCanister.transfer(participant, challenge.reward);
        }
        */

        return true;
    }),
});
