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

const AllWrap = styled.div`
    padding: 40px;
`;
