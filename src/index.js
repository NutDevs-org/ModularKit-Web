import React from 'react';
import ReactDOM from 'react-dom';
import './ui/main/main.scss'
import Header from "./ui/modules/header/Header";
import Footer from "./ui/modules/footer/Footer";

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
);