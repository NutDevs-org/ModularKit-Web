import React from 'react';
import ReactDOM from 'react-dom';
import './ui/main/main.scss'
import HeaderBar from "./ui/modules/headerbar/HeaderBar";

ReactDOM.render(
  <React.StrictMode>
    <HeaderBar />
  </React.StrictMode>,
  document.getElementById('root')
);