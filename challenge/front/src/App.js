import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import Suggest from './Components/Suggest.jsx';
import Profile from './Components/Profile.jsx';

function App() {
    // 일단 icp에 요청을 보내서 처음에 user 정보를 cookie에 가지고 있다가
    // 해당 정보로 계속 다시 요청 보내면 될 것 같다.

    return (
        <>
            <Header />
            <Height80Box />
            <AllWrap>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/suggest" element={<Suggest />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </AllWrap>
        </>
    );
}

export default App;

const Height80Box = styled.div`
    height: 80px;
`;

const AllWrap = styled.div`
    width: 1400px;
    margin: 25px auto;
    border-radius: 20px;
    background-color: #fafafb;
    padding: 40px;
    box-sizing: border-box;
`;
