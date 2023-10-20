import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

// import challenge from './dids/challenge.did';
// console.log({ challenge });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>
);
