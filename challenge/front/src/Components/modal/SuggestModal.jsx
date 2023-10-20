import React from 'react';
import styled from 'styled-components';

const SuggestModal = (props) => {
    return (
        <>
            <AllWrap>
                <ModalWrap>
                    <ExistWrap>
                        <div></div>
                        <ExistBtn
                            onClick={() => {
                                props.modalSet(false);
                            }}
                        >
                            X
                        </ExistBtn>
                    </ExistWrap>
                </ModalWrap>
            </AllWrap>
        </>
    );
};

export default SuggestModal;

const AllWrap = styled.div`
    background-color: #00000082;
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
`;

const ModalWrap = styled.div`
    background-color: white;
    width: 800px;
    height: 600px;
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
    width: 80px;
    height: 80px;
    cursor: pointer;
    color: black;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    line-height: 80px;
`;
