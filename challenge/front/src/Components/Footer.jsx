import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { createClient } from '@connect2ic/core';
import { defaultProviders } from '@connect2ic/core/providers';
import { ConnectButton, ConnectDialog, Connect2ICProvider } from '@connect2ic/react';
import '@connect2ic/core/style.css';
import { IDL } from '@dfinity/candid';
import client from '../modules/client.js';

const Footer = () => {
    console.log({ client });
    return (
        <Connect2ICProvider client={client}>
            <AllWrap>
                <FooterWrap>
                    <div>하이</div>
                </FooterWrap>
            </AllWrap>
        </Connect2ICProvider>
    );
};

export default Footer;

const AllWrap = styled.div`
    display: flex;
    padding: 40px 10px 120px 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: var(--grey-900, #1b1e24);
`;

const FooterWrap = styled.div`
    display: flex;
    width: 1040px;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    height: 180px;
`;
