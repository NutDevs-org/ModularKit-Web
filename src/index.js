import React from 'react';
import ReactDOM from 'react-dom';
import './ui/main/main.scss'

import Header from "./ui/modules/header/Header";
import Main from "./ui/modules/main/Main";
import Footer from "./ui/modules/footer/Footer";

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <Main/>
        <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
);