// import axios from 'axios';
// import { useEffect, useState } from 'react';
import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <>
            <span>home</span>
            <ChallengeAllWrap>
                <ChallengeBox>
                    <div>제목</div>
                    <div>이미지</div>
                    <div>내용 요약</div>
                    <div>작성 시각</div>
                    <div>참여하기</div>
                </ChallengeBox>
            </ChallengeAllWrap>
        </>
    );
};

export default Home;

const ChallengeAllWrap = styled.div`
    padding: 20px;
    border-radius: 10px;
`;

const ChallengeBox = styled.div`
    width: 277px;
    height: 300px;
    border-radius: 10px;
    display: inline-block;
    padding: 10px;
    margin: 10px;
    overflow: scroll;
    background-color: white;
`;
