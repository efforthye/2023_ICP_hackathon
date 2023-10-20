// import axios from 'axios';
// import { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ParticipateModal from './modal/ParticipateModal.jsx';

const Home = () => {
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden'; // 모달이 열릴 때 스크롤 비활성화
        } else {
            document.body.style.overflow = 'auto'; // 모달이 닫힐 때 스크롤 활성화
        }
    }, [modal]);

    return (
        <>
            <TopText>Top. 8 Challenge</TopText>
            <ChallengeAllWrap>
                {/* for */}
                <ContentAndOverlayWrap>
                    <ChallengeBoxWrap>
                        <ChallengeBox className="original">
                            <ContentWrap>
                                <TitleText>이거이거 해주세용</TitleText>
                                <DescText>
                                    내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                                </DescText>
                            </ContentWrap>
                            <EtcWrap>
                                <EightDFCWrap>{1000} DFC</EightDFCWrap>
                                <div>
                                    <TimeWrap>
                                        <TimeText>creater</TimeText>
                                        <Time>박혜림</Time>
                                    </TimeWrap>
                                    <TimeWrap>
                                        <TimeText>participants</TimeText>
                                        <Time>{10}명 참여</Time>
                                    </TimeWrap>
                                </div>
                            </EtcWrap>
                        </ChallengeBox>
                        <OverlayBox className="overlay">
                            <OverlayText>
                                <TimeWrap>
                                    <TimeText>챌린지 시작일</TimeText>
                                    <Time>time</Time>
                                </TimeWrap>
                                <TimeWrap>
                                    <TimeText>챌린지 마감일</TimeText>
                                    <Time>time</Time>
                                </TimeWrap>
                                <DetailText>길다란 내용 내용 내용...</DetailText>
                            </OverlayText>
                            <EightBtn
                                onClick={() => {
                                    // 참여하기 모달 띄우기
                                    setModal(true);
                                    alert('참여하기');
                                }}
                            >
                                <div>참여하기</div>
                            </EightBtn>
                        </OverlayBox>
                    </ChallengeBoxWrap>
                    {modal ? <ParticipateModal modalSet={setModal} /> : <></>}
                </ContentAndOverlayWrap>
                <ContentAndOverlayWrap>
                    <ChallengeBoxWrap>
                        <ChallengeBox className="original">
                            <ContentWrap>
                                <TitleText>이거이거 해주세용</TitleText>
                                <DescText>
                                    내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                                </DescText>
                            </ContentWrap>
                            <EtcWrap>
                                <EightDFCWrap>{1000} DFC</EightDFCWrap>
                                <div>
                                    <TimeWrap>
                                        <TimeText>creater</TimeText>
                                        <Time>박혜림</Time>
                                    </TimeWrap>
                                    <TimeWrap>
                                        <TimeText>participants</TimeText>
                                        <Time>{10}명 참여</Time>
                                    </TimeWrap>
                                </div>
                            </EtcWrap>
                        </ChallengeBox>
                        <OverlayBox className="overlay">
                            <OverlayText>
                                <TimeWrap>
                                    <TimeText>챌린지 시작일</TimeText>
                                    <Time>time</Time>
                                </TimeWrap>
                                <TimeWrap>
                                    <TimeText>챌린지 마감일</TimeText>
                                    <Time>time</Time>
                                </TimeWrap>
                                <DetailText>길다란 내용 내용 내용...</DetailText>
                            </OverlayText>
                            <EightBtn
                                onClick={() => {
                                    // 참여하기 모달 띄우기
                                    setModal(true);
                                    alert('참여하기');
                                }}
                            >
                                <div>참여하기</div>
                            </EightBtn>
                        </OverlayBox>
                    </ChallengeBoxWrap>
                    {modal ? <ParticipateModal modalSet={setModal} /> : <></>}
                </ContentAndOverlayWrap>
            </ChallengeAllWrap>

            <LatestText>Latest Challenge</LatestText>
            <ChallengeBoxWrap>
                <ChallengeBox className="original">
                    <ContentWrap>
                        <TitleText>이거이거 해주세용</TitleText>
                        <DescText>
                            내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                        </DescText>
                    </ContentWrap>
                    <EtcWrap>
                        <EightDFCWrap>{1000} DFC</EightDFCWrap>
                        <div>
                            <TimeWrap>
                                <TimeText>creater</TimeText>
                                <Time>박혜림</Time>
                            </TimeWrap>
                            <TimeWrap>
                                <TimeText>participants</TimeText>
                                <Time>{10}명 참여</Time>
                            </TimeWrap>
                        </div>
                    </EtcWrap>
                </ChallengeBox>
                <OverlayBox className="overlay">
                    <OverlayText>
                        <TimeWrap>
                            <TimeText>챌린지 시작일</TimeText>
                            <Time>time</Time>
                        </TimeWrap>
                        <TimeWrap>
                            <TimeText>챌린지 마감일</TimeText>
                            <Time>time</Time>
                        </TimeWrap>
                        <DetailText>길다란 내용 내용 내용...</DetailText>
                    </OverlayText>
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

const ContentAndOverlayWrap = styled.div`
    display: inline-block;
`;

const ChallengeBoxWrap = styled.div`
    width: 330px;
    height: 340px;
    border-radius: 10px;
    display: inline-block;
    overflow: hidden;
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
    cursor: pointer;
    &:hover + .overlay {
        display: block;
    }
    display: flex;
    flex-direction: column; /* 수직으로 배치 */
    justify-content: space-between;
`;
const OverlayBox = styled.div`
    position: absolute;
    /* left: 0; */
    /* top: 0; */
    width: 100%;
    height: 100%;
    /* background-color: #2e2e2e20; */
    background-color: #2e2e2ed2;
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
const OverlayText = styled.div`
    padding: 15px 20px 0 20px;
    color: white;
    overflow: hidden;
`;

const ContentWrap = styled.div`
    /* height: 140px; */
    padding: 10px;
    margin: 10px;
    overflow: scroll;
`;
const EtcWrap = styled.div`
    width: 330px;
    background-color: black;
    color: white;
    & > div {
        padding: 10px;
        margin: 10px;
    }
`;

const TitleText = styled.div`
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
    margin: 8px 0 10px;
`;

const DescText = styled.div`
    height: 60px;
    text-overflow: ellipsis;
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
const LatestBtn = styled.div`
    background: linear-gradient(0deg, #ff3263 25.49%, #6d6aff 92.08%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-color: transparent; /* 텍스트 색상을 투명으로 설정 */
    color: white; /* 텍스트의 색상을 하양(white)으로 설정 */
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

const BorderBar = styled.div`
    height: 1px;
    background: var(--gray-300, #e5e8eb);
`;

const TimeWrap = styled.div`
    margin: 5px 0;
    display: flex;
    align-items: center;
`;
const TimeText = styled.div`
    margin: 5px 8px 5px 0;
    /* width: 60px; */
`;

const Time = styled.div`
    /* color: #18181899; */
`;
const EightDFCWrap = styled.div`
    color: red;
`;

const LatestDFCWrap = styled.div`
    margin-bottom: 10px;
    background: linear-gradient(0deg, #ff3263 25.49%, #6d6aff 92.08%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-color: #1194cd;
`;

const DetailText = styled.div`
    margin: 10px 0;
`;
