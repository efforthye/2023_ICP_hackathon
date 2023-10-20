// import axios from 'axios';
// import { useEffect, useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Profile = () => {
    // URL에서 숫자 값을 가져옴
    const params = useParams();
    const profileId = params['*'];
    if (profileId == undefined) {
        // alert('업즘');
    } else {
        // alert('잇즘');
    }

    return (
        <>
            <AllWrap>
                <div>profile</div>
            </AllWrap>
        </>
    );
};

export default Profile;

const AllWrap = styled.div`
    /* background-color: red; */
`;
