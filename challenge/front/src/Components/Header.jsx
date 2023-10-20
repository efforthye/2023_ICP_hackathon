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
                <div>title</div>
                <div>
                    <Link to="/"> Home(참여하기) </Link>
                    <Link to="/suggest"> +(제안하기) </Link>
                    <Link to="/profile"> wallet or profile </Link>
                </div>
                <div
                    className="auth-section"
                    onClick={() => {
                        console.log('클릭');
                    }}
                >
                    <ConnectButton />
                </div>
                <ConnectDialog />
            </AllWrap>
        </Connect2ICProvider>
    );
};

export default Header;

const AllWrap = styled.div`
    height: 80px;
    padding: 0px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
