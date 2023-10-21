import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Connect2ICProvider } from '@connect2ic/react';
import client from '../modules/client.js';
import SuggestModal from './modal/SuggestModal.jsx';

import { AuthClient } from '@dfinity/auth-client';

import {
    canisterId as tokenCanisterId,
    challenge as tokenChallenge,
    createActor as createTokenActor,
    idlFactory as tokenIdlFactory,
} from '../declarations/token';
import {
    canisterId as challengeCanisterId,
    challenge as challengeChallenge,
    createActor as createChallengeActor,
    idlFactory as challengeIdlFactory,
} from '../declarations/challenge';

import { ActorSubclass, HttpAgentOptions, HttpAgent, Actor, ActorConfig, Agent } from '@dfinity/agent';

// 호스트 url 지정
const host = 'http://localhost:4943';

// principal 생성
const authClient = await AuthClient.create();
const principal = await authClient.getIdentity().getPrincipal();

// HTTP 에이전트 생성
const agent = new HttpAgent({ host, identity: principal });

// 쿠키에서 principal 가져옴
function getPrincipal() {
    const name = 'principal';
    var cookieArray = document.cookie.split('; ');
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        var keyValue = cookie.split('=');
        if (keyValue[0] === name) {
            return keyValue[1];
        }
    }
    return '';
}

// 캐니스터 인스턴스 생성
const TokenCanister = createTokenActor({ canisterId: tokenCanisterId, agent: agent });
const ChallengeCanister = createChallengeActor({ canisterId: challengeCanisterId, agent: agent });

const Header = () => {
    const [login, setLogin] = useState(false);
    const [modal, setModal] = useState(false);
    const [principal, setPrincipal] = useState();

    return (
        <Connect2ICProvider client={client}>
            <AllWrap>
                <HeaderWrap>
                    {/* 클릭하면 Home으로 이동 */}
                    <LogoWrap>
                        <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
                            <LogoImg alt="" src="images/difinity.png" />
                            <div>DeFi CHALLENGE</div>
                        </Link>
                    </LogoWrap>{' '}
                    <RightWrap>
                        {/* 로그인 상태라면 띄움 */}
                        {login ? (
                            <>
                                {/* 제안하기 버튼 */}
                                <SuggestBtn
                                    onClick={() => {
                                        // 모달을 띄우도록 상태를 변경함
                                        setModal(true);
                                    }}
                                >
                                    <div>+</div>
                                    <div>챌린지 제안</div>
                                </SuggestBtn>
                                {/* 모달 */}
                                {modal ? (
                                    // <ModalAllWrap
                                    //     onClick={(e) => {
                                    //         setModal(false);
                                    //     }}
                                    // >
                                    //     <ModalWrap>ㅎㅎ</ModalWrap>
                                    // </ModalAllWrap>
                                    <SuggestModal modalSet={setModal} />
                                ) : (
                                    <></>
                                )}
                                {/* </Link> */}
                                {/* 해당 id의 프로필로 이동 */}
                                <UserInfoWrap>
                                    <WalletWrap>
                                        <WalletImg alt="" src="images/wallet.png" />
                                        <div>
                                            <div>{addCommasToNumber(1000)} DFC</div>
                                        </div>
                                    </WalletWrap>
                                    <ProfileWrap>
                                        <WalletImg alt="" src="images/profile.png" />
                                        {/* 해당 아이디의 프로필로 이동하기 */}
                                        <Link
                                            to={`/profile/${principal}`}
                                            style={{ color: 'black', textDecoration: 'none' }}
                                        >
                                            {principal}
                                        </Link>
                                    </ProfileWrap>
                                </UserInfoWrap>
                            </>
                        ) : (
                            <>
                                {/* 상태값에 따라 미 로그인 상태라면 띄움 */}
                                <ConnectBtn
                                    onClick={async () => {
                                        const authClient = await AuthClient.create();
                                        const principal = await authClient.getIdentity().getPrincipal();

                                        document.cookie = `principal=${principal}`;
                                        const cookie = await getPrincipal();
                                        console.log({ cookie });
                                        setPrincipal(cookie);

                                        // 실제 요청 보냄
                                        console.log({ TokenCanister });
                                        await TokenCanister.allState()
                                            .then((result) => {
                                                // 요청이 성공하면 이 부분에서 결과를 처리합니다.
                                                console.log('connectAccount 성공:', result);
                                            })
                                            .catch((error) => {
                                                // 요청이 실패하면 이 부분에서 에러를 처리합니다.
                                                console.error('connectAccount 실패:', error);
                                            });

                                        setLogin(cookie ? true : false);
                                    }}
                                >
                                    <div>Connect</div>
                                </ConnectBtn>
                            </>
                        )}
                    </RightWrap>
                </HeaderWrap>
            </AllWrap>
        </Connect2ICProvider>
    );
};

export default Header;

const AllWrap = styled.div`
    height: 80px;
    background-color: white;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid #ebebeb;
    z-index: 1;
`;

const HeaderWrap = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
`;

const LogoWrap = styled.div`
    & > a {
        display: flex;
        align-items: center;
    }
`;

const LogoImg = styled.img`
    width: 70px;
    margin-right: 10px;
`;

const RightWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const SuggestBtn = styled.div`
    width: 120px;
    height: 32px;
    border-radius: 30px;
    background-color: black;
    color: white;
    font-weight: 900;
    font-size: 30px;
    text-align: center;
    line-height: 32px;
    display: flex;
    & > div {
        font-size: 16px;
        margin-left: 3px;
        font-weight: 600;
    }
    justify-content: center;
    cursor: pointer;
`;
const ConnectBtn = styled.div`
    width: 120px;
    height: 40px;
    border-radius: 30px;
    background-color: black;
    color: white;
    font-weight: 900;
    font-size: 30px;
    text-align: center;
    line-height: 40px;
    display: flex;
    & > div {
        font-size: 16px;
        margin-left: 3px;
        font-weight: 600;
    }
    justify-content: center;
    cursor: pointer;
`;

const UserInfoWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const WalletWrap = styled.div`
    margin-left: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ProfileWrap = styled.div`
    margin-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const WalletImg = styled.img`
    width: 30px;
    margin-right: 10px;
`;

// 지갑 연결 버튼 임시 저장
// {/* <div
//     className="auth-section"
//     onClick={() => {
//         console.log('클릭');
//     }}
// >
//     <ConnectButton />
// </div> */}
// {
//     /* <ConnectDialog /> */
// }

// function addCommasToNumber(number) {
//     // 숫자를 문자열로 변환
//     console.log(number.type);

//     let numberStr;
//     if (number.type == 'number') {
//         numberStr = number.toString();
//     } else {
//         numberStr = number;
//     }

//     // 천 단위마다 컴마 추가
//     return numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }

function addCommasToNumber(number) {
    return number.toLocaleString();
}
