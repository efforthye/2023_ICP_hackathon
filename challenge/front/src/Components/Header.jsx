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
                    <div>1000 icp</div> {/* or <div/>*/}
                    <div>
                        <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
                            {' '}
                            Home(참여하기){' '}
                        </Link>
                        <Link to="/suggest" style={{ color: 'black', textDecoration: 'none' }}>
                            {' '}
                            +(제안하기){' '}
                        </Link>
                    </div>
                    <div>
                        <Link to="/profile"> wallet or profile </Link>
                        <div
                            className="auth-section"
                            onClick={() => {
                                console.log('클릭');
                            }}
                        >
                            <ConnectButton />
                        </div>
                        <ConnectDialog />
                    </div>
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
