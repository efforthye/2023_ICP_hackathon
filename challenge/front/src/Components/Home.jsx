// import axios from 'axios';
// import { useEffect, useState } from 'react';
import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <>
            <TopText>Top. 8 Challenge</TopText>
            <ChallengeAllWrap>
                {/* 8개 */}
                {/* {challenges.map((challenge, index) => (
                <ChallengeBox key={index}>
                <div>{challenge.title}</div>
                <div>{challenge.image}</div>
                <div>{challenge.summary}</div>
                <div>{challenge.timestamp}</div>
                <div>참여하기</div>
                </ChallengeBox>
                ))} */}
                <ChallengeBox>
                    <div>제목</div>
                    <div>이미지</div>
                    <div>내용 요약</div>
                    <div>작성 시각</div>
                    <div>참여하기</div>
                </ChallengeBox>
                <ChallengeBox>
                    <div>제목</div>
                    <div>이미지</div>
                    <div>내용 요약</div>
                    <div>작성 시각</div>
                    <div>참여하기</div>
                </ChallengeBox>
                <ChallengeBox>
                    <div>제목</div>
                    <div>이미지</div>
                    <div>내용 요약</div>
                    <div>작성 시각</div>
                    <div>참여하기</div>
                </ChallengeBox>
                <ChallengeBox>
                    <div>제목</div>
                    <div>이미지</div>
                    <div>내용 요약</div>
                    <div>작성 시각</div>
                    <div>참여하기</div>
                </ChallengeBox>
                <ChallengeBox>
                    <div>제목</div>
                    <div>이미지</div>
                    <div>내용 요약</div>
                    <div>작성 시각</div>
                    <div>참여하기</div>
                </ChallengeBox>
                <ChallengeBox>
                    <div>제목</div>
                    <div>이미지</div>
                    <div>내용 요약</div>
                    <div>작성 시각</div>
                    <div>참여하기</div>
                </ChallengeBox>
                <ChallengeBox>
                    <div>제목</div>
                    <div>이미지</div>
                    <div>내용 요약</div>
                    <div>작성 시각</div>
                    <div>참여하기</div>
                </ChallengeBox>
                <ChallengeBox>
                    <div>제목</div>
                    <div>이미지</div>
                    <div>내용 요약</div>
                    <div>작성 시각</div>
                    <div>참여하기</div>
                </ChallengeBox>
            </ChallengeAllWrap>

            <LatestText>Latest Challenge</LatestText>
            <ChallengeAllWrap>
                {/* 12개 */}
                <ChallengeBox>
                    <div>제목</div>
                    <div>이미지</div>
                    <div>내용 요약</div>
                    <div>작성 시각</div>
                    <div>참여하기</div>
                </ChallengeBox>
                <ChallengeBox>
                    <div>제목</div>
                    <div>이미지</div>
                    <div>내용 요약</div>
                    <div>작성 시각</div>
                    <div>참여하기</div>
                </ChallengeBox>
                <ChallengeBox>
                    <div>제목</div>
                    <div>이미지</div>
                    <div>내용 요약</div>
                    <div>작성 시각</div>
                    <div>참여하기</div>
                </ChallengeBox>
                <ChallengeBox>
                    <div>제목</div>
                    <div>이미지</div>
                    <div>내용 요약</div>
                    <div>작성 시각</div>
                    <div>참여하기</div>
                </ChallengeBox>
                <ChallengeBox>
                    <div>제목</div>
                    <div>이미지</div>
                    <div>내용 요약</div>
                    <div>작성 시각</div>
                    <div>참여하기</div>
                </ChallengeBox>
                <ChallengeBox>
                    <div>제목</div>
                    <div>이미지</div>
                    <div>내용 요약</div>
                    <div>작성 시각</div>
                    <div>참여하기</div>
                </ChallengeBox>
                <ChallengeBox>
                    <div>제목</div>
                    <div>이미지</div>
                    <div>내용 요약</div>
                    <div>작성 시각</div>
                    <div>참여하기</div>
                </ChallengeBox>
                <ChallengeBox>
                    <div>제목</div>
                    <div>이미지</div>
                    <div>내용 요약</div>
                    <div>작성 시각</div>
                    <div>참여하기</div>
                </ChallengeBox>
                <ChallengeBox>
                    <div>제목</div>
                    <div>이미지</div>
                    <div>내용 요약</div>
                    <div>작성 시각</div>
                    <div>참여하기</div>
                </ChallengeBox>
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

const TopText = styled.div`
    padding: 10px;
    margin-top: 50px;
    font-weight: 700;
    font-size: 20px;
    /* background: linear-gradient(0deg, #ff3263 25.49%, #6d6aff 92.08%); */
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-color: red;
`;
const LatestText = styled.div`
    padding: 10px;
    margin-top: 50px;
    font-weight: 700;
    font-size: 20px;
    background: linear-gradient(0deg, #ff3263 25.49%, #6d6aff 92.08%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-color: #1194cd;
    /* background-color: red; */
`;

const ChallengeAllWrap = styled.div`
    border-radius: 10px;
`;

const ChallengeBox = styled.div`
    width: 310px;
    height: 340px;
    border-radius: 10px;
    display: inline-block;
    padding: 10px;
    margin: 10px;
    overflow: scroll;
    background-color: white;
`;
