import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import Suggest from './Components/Suggest.jsx';
import Profile from './Components/Profile.jsx';
import Footer from './Components/Footer.jsx';

function App() {
    // 일단 icp에 요청을 보내서 처음에 user 정보를 cookie에 가지고 있다가
    // 해당 정보로 계속 다시 요청 보내면 될 것 같다.
    // https://m.blog.naver.com/PostView.naver?blogId=francisec&logNo=222383873268&categoryNo=1&proxyReferer=
    // 참고 : https://github.com/therealbryanho/dfinity-websitewithcms
    // 치트키 : https://dfinityorg.notion.site/ICP-Hackathon-Cheat-Sheet-b2921239266149de81021412f572351c

    return (
        <>
            <Header />
            <Height80Box />
            <AllWrap>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/suggest" element={<Suggest />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/*" element={<Profile />} />
                </Routes>
            </AllWrap>
            <Height60Box />
            <Footer />
        </>
    );
}

export default App;

const Height60Box = styled.div`
    height: 60px;
`;
const Height80Box = styled.div`
    height: 80px;
`;

const AllWrap = styled.div`
    width: 1400px;
    margin: 10px auto;
    box-sizing: border-box;
    min-height: 800px;
`;
