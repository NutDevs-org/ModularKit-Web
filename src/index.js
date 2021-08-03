import React from 'react';
import ReactDOM from 'react-dom';
import './ui/main/main.scss'
import Header from "./ui/modules/header/Header";

ReactDOM.render(
    <React.StrictMode>
        <Header/>
    </React.StrictMode>,
    document.getElementById('root')
);