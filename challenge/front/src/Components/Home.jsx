// import axios from 'axios';
// import { useEffect, useState } from 'react';
import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <>
            <HomeText>Top. 8</HomeText>
            <ChallengeAllWrap>
                {/* 8개 */}
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

            <HomeText>Latest</HomeText>
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

const HomeText = styled.div`
    padding: 10px;
    margin-top: 50px;
    font-weight: 700;
    font-size: 20px;
    background: linear-gradient(0deg, #ff3263 25.49%, #6d6aff 92.08%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-color: red;
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
