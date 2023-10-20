import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import Suggest from './Components/Suggest.jsx';

function App() {
    return (
        <AllWrap className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/suggest" element={<Suggest />} />
            </Routes>
        </AllWrap>
    );
}

export default App;

const AllWrap = styled.div`
    width: 1400px;
    margin: 0 auto;
    height: 100vh;
    background-color: white;
`;
