import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { createClient } from '@connect2ic/core';
import { defaultProviders } from '@connect2ic/core/providers';
import { ConnectButton, ConnectDialog, Connect2ICProvider } from '@connect2ic/react';
import '@connect2ic/core/style.css';
import { IDL } from '@dfinity/candid';
import client from '../modules/client.js';

const Header = () => {
    console.log({ client });
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
                        {/* 제안하기 버튼 */}
                        <Link to="/suggest" style={{ color: 'black', textDecoration: 'none' }}>
                            <DefaultBtn>
                                <div>+</div>
                                <div>제안하기</div>
                            </DefaultBtn>
                        </Link>
                        {/* 해당 id의 프로필로 이동 */}
                        <WalletWrap>
                            <WalletImg alt="" src="images/wallet.png" />
                            <div>
                                <div>1000 DFC</div>
                            </div>
                        </WalletWrap>
                        <ProfileWrap>
                            <WalletImg alt="" src="images/profile.png" />
                            <Link to="/profile" style={{ color: 'black', textDecoration: 'none' }}>
                                1564342423
                            </Link>
                        </ProfileWrap>

                        {/* 미 로그인 상태라면 띄움 */}
                        {/* <DefaultBtn>
                            <div>Connect</div>
                        </DefaultBtn> */}
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
    width: 400px;
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
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const DefaultBtn = styled.div`
    width: 100px;
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
