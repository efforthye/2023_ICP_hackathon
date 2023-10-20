import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const SuggestModal = (props) => {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [amount, setAmount] = useState();
    const [endDate, setEndDate] = useState(new Date());

    const titleRef = useRef();
    const descRef = useRef();
    const amountRef = useRef();

    return (
        <>
            <AllWrap>
                <ModalWrap>
                    <ExistWrap>
                        <ModalTitle>
                            <div>참여하기</div>
                            <TitleIconImg alt="" src="images/dia.png" />
                        </ModalTitle>
                        <ExistBtn
                            onClick={() => {
                                props.modalSet(false);
                            }}
                        >
                            X
                        </ExistBtn>
                    </ExistWrap>
                    <div>
                        <TextTitle></TextTitle>
                        <Description>선택한 챌린지에 대한 설명 출력 설명설명 ㅇㅅㅇ;;</Description>
                    </div>
                    <ContentsWrap>
                        <InputWrap>
                            <TextTitle>제목</TextTitle>
                            <TextInput
                                ref={titleRef}
                                contentEditable={true}
                                onKeyDown={(e) => {
                                    if (e.key === 'Tab') setDesc('');
                                }}
                                onClick={(e) => {
                                    const innerText = e.target.innerText;
                                    if (innerText == '제목을 입력해 주세요.') setTitle('');
                                }}
                            >
                                {title ?? '제목을 입력해 주세요.'}
                            </TextInput>
                        </InputWrap>
                        <InputWrap>
                            <TextTitle>참여 내용</TextTitle>
                            <BigTextInput
                                ref={descRef}
                                contentEditable={true}
                                onKeyDown={(e) => {
                                    if (e.key === 'Tab') setAmount('');
                                }}
                                onClick={(e) => {
                                    const innerText = e.target.innerText;
                                    if (innerText == '내용을 입력해 주세요.') setDesc('');
                                }}
                            >
                                {desc ?? '내용을 입력해 주세요.'}
                            </BigTextInput>
                        </InputWrap>
                    </ContentsWrap>
                    <BtnWrap>
                        <CancelBtn
                            onClick={() => {
                                props.modalSet(false);
                            }}
                        >
                            취소
                        </CancelBtn>
                        <SubmitBtn
                            onClick={() => {
                                props.modalSet(false);
                                alert('참여를 시작합니다.');
                                const title = titleRef.current.textContent;
                                const desc = descRef.current.textContent;
                                console.log({ title, desc });
                            }}
                        >
                            참여하기
                        </SubmitBtn>
                    </BtnWrap>
                </ModalWrap>
            </AllWrap>
        </>
    );
};

export default React.memo(SuggestModal);

const AllWrap = styled.div`
    background-color: #0000004e;
    width: 100vw;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    z-index: 2;
`;

const ModalWrap = styled.div`
    background-color: white;
    width: 800px;
    margin: 0 auto;
    border-radius: 20px;
`;

const ExistWrap = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const ExistBtn = styled.div`
    width: 100px;
    height: 100px;
    cursor: pointer;
    color: black;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    line-height: 100px;
`;

const ModalTitle = styled.div`
    height: 100px;
    /* background-color: red; */
    font-size: 30px;
    font-weight: 700;
    line-height: 100px;
    margin-left: 35px;
    display: flex;
    align-items: center;
`;

const Description = styled.div`
    /* height: 100px; */
    /* background-color: red; */
    font-size: 16px;
    font-weight: 300;
    margin-left: 35px;
    /* display: flex; */
    /* align-items: center; */
`;

const TitleIconImg = styled.img`
    width: 35px;
    height: 35px;
    margin-left: 8px;
`;
const DatePickImg = styled.img`
    width: 35px;
    height: 35px;
    margin-left: 8px;
    position: absolute;
    left: 10px;
    top: 47px;
`;

const ContentsWrap = styled.div`
    padding: 0 40px;
    /* background-color: red; */
`;

const BtnWrap = styled.div`
    display: flex;
    padding: 40px;
    align-items: flex-start;
    gap: 10px;
    box-sizing: border-box;
`;

const CancelBtn = styled.div`
    display: flex;
    height: 50px;
    padding: 10px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    background: #fff;
    border-radius: 20px;
    color: var(--gray-900, #505866);
    font-size: 14px;
    font-weight: 700;
    border-radius: 8px;
    border: 1px solid var(--gray-300, #e5e8eb);
    cursor: pointer;
`;

const SubmitBtn = styled.div`
    display: flex;
    height: 50px;
    padding: 10px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    color: #fff;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 8px;
    background: black;
    cursor: pointer;
`;

const InputWrap = styled.div`
    position: relative;
    margin-top: 30px;
    & > .react-datepicker-wrapper > div {
        text-align: center;
    }
    & > .react-datepicker-wrapper > div > input {
        display: flex;
        height: 48px;
        padding: 10px 18px;
        align-items: center;
        gap: 12px;
        border-radius: 5px;
        border: 1px solid var(--grey-100, #e5e8eb);
        background: var(--gray-100, #fafafb);
        flex: 1 0 0;
        color: var(--gray-700, #8d94a0);
        font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 48px;
        padding-left: 65px;
        padding-right: 100px;
        margin-bottom: 10px;
    }
`;
const TextTitle = styled.div`
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 10px;
`;
const TextInput = styled.div`
    display: flex;
    height: 48px;
    padding: 10px 18px;
    align-items: center;
    gap: 12px;
    border-radius: 5px;
    border: 1px solid var(--grey-100, #e5e8eb);
    background: var(--gray-100, #fafafb);
    flex: 1 0 0;
    color: var(--gray-700, #8d94a0);
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
`;

const BigTextInput = styled.div`
    display: flex;
    height: 48px;
    padding: 10px 18px;
    align-items: center;
    gap: 12px;
    border-radius: 5px;
    border: 1px solid var(--grey-100, #e5e8eb);
    background: var(--gray-100, #fafafb);
    flex: 1 0 0;
    color: var(--gray-700, #8d94a0);
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
`;
