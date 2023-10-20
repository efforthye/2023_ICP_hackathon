import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import challenge from '../../src/dids/challenge.did';

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const button = e.target.querySelector('button');
    const name = document.getElementById('name').value.toString();
    button.setAttribute('disabled', true);
    // Interact with foo actor, calling the greet method
    const greeting = await challenge.greet(name);
    button.removeAttribute('disabled');
    document.getElementById('greeting').innerText = greeting;
    return false;
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>
);
