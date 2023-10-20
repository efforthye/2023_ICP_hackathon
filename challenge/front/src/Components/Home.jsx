// import axios from 'axios';
// import { useEffect, useState } from 'react';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <>
            <TopText>Top. 8 Challenge</TopText>
            <ChallengeAllWrap>
                <ChallengeBoxWrap>
                    <ChallengeBox className="original">
                        <div>
                            <TitleText>제목</TitleText>
                            <DescText>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</DescText>
                        </div>
                        <div>
                            <div>작성 시각</div>
                            <div>만료 시각</div>
                            <div>상금</div>
                        </div>
                    </ChallengeBox>
                    <OverlayBox className="overlay">
                        <EightBtn
                            onClick={() => {
                                // 참여하기 모달 띄우기
                                alert('참여하기');
                            }}
                        >
                            <div>참여하기</div>
                        </EightBtn>
                    </OverlayBox>
                </ChallengeBoxWrap>
            </ChallengeAllWrap>

            <LatestText>Latest Challenge</LatestText>
            <ChallengeAllWrap>
                <ChallengeBoxWrap>
                    <ChallengeBox className="original">
                        <div>
                            <TitleText>제목</TitleText>
                            <DescText>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</DescText>
                        </div>
                        <div>
                            <div>작성 시각</div>
                            <div>만료 시각</div>
                            <div>상금</div>
                        </div>
                    </ChallengeBox>
                    <OverlayBox className="overlay">
                        <EightBtn
                            onClick={() => {
                                // 참여하기 모달 띄우기
                                alert('참여하기');
                            }}
                        >
                            <div>참여하기</div>
                        </EightBtn>
                    </OverlayBox>
                </ChallengeBoxWrap>
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
`;

const ChallengeAllWrap = styled.div`
    border-radius: 10px;
`;

const ChallengeBoxWrap = styled.div`
    width: 330px;
    height: 340px;
    border-radius: 10px;
    display: inline-block;
    overflow: scroll;
    background-color: white;
    box-sizing: border-box;
    position: relative;
    margin: 10px;

    & > .on {
        // on 클래스가 있으면 보여줌
        display: block;
    }
`;
const ChallengeBox = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    padding: 20px;
    margin: 10px;
    cursor: pointer;
    &:hover + .overlay {
        display: block;
    }
    height: 280px;
`;
const OverlayBox = styled.div`
    position: absolute;
    /* left: 0; */
    /* top: 0; */
    width: 100%;
    height: 100%;
    background-color: #2e2e2e20;
    backdrop-filter: blur(2px); /* 배경 흐리게 만들기 */
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
    &:hover,
    &.on {
        display: block;
    }
`;

const TitleText = styled.div`
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
    margin: 8px 0 10px;
`;

const DescText = styled.div`
    color: #18181899;
    font-weight: 450;
    margin-bottom: 40px;
`;

const EightBtn = styled.div`
    width: 100px;
    height: 40px;
    border-radius: 10px;
    background-color: red;
    color: white;
    font-weight: 900;
    font-size: 30px;
    text-align: center;
    line-height: 40px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    bottom: 40px;
    left: 113px;
    & > div {
        font-size: 16px;
        margin-left: 3px;
        font-weight: 600;
    }
`;

// {/* 8개 */}
// {/* {challenges.map((challenge, index) => (
// <ChallengeBox key={index}>
// <div>{challenge.title}</div>
// <div>{challenge.image}</div>
// <div>{challenge.summary}</div>
// <div>{challenge.timestamp}</div>
// <div>참여하기</div>
// </ChallengeBox>
// ))} */}
