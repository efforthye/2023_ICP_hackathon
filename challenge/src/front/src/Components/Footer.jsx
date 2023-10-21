import React from 'react';
import styled from 'styled-components';

import { Connect2ICProvider } from '@connect2ic/react';
import '@connect2ic/core/style.css';
import client from '../modules/client.js';

const Footer = () => {
    console.log({ client });
    return (
        <Connect2ICProvider client={client}>
            <AllWrap>
                <FooterWrap>
                    <FooterTextWrap>
                        <FooterTextDesc>2023 ICP x Code States Hackathon.</FooterTextDesc>
                        <FooterText>Development Period: October 20, 2023, to October 21, 2023.</FooterText>
                    </FooterTextWrap>
                </FooterWrap>
            </AllWrap>
        </Connect2ICProvider>
    );
};

export default Footer;

const AllWrap = styled.div`
    display: flex;
    padding: 60px 10px 120px 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: var(--grey-900, #1b1e24);
`;

const FooterWrap = styled.div`
    display: flex;
    width: 1400px;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    height: 180px;
    padding: 10px;
    box-sizing: border-box;
`;

const FooterTextWrap = styled.div`
    color: white;
`;

const FooterText = styled.div`
    margin-bottom: 15px;
    /* background: linear-gradient(0deg, #ff3263 25.49%, #6d6aff 92.08%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-color: #1194cd; */
`;
const FooterTextDesc = styled.div`
    font-size: 20px;
    margin-bottom: 25px;
`;
