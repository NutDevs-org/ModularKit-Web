import React from 'react';
import ReactDOM from 'react-dom';
import './ui/main/main.scss'

import Header from "./ui/modules/header/Header";
import Footer from "./ui/modules/footer/Footer";
import { initializeIcons } from '@fluentui/react/lib/Icons';
import FileViewer from "./ui/modules/FileViewer/FileViewer";

const gitBaseUrl = "https://github.com/NutDevs-org";
const projName = "ModularKit";
const gitProjUrl = `${gitBaseUrl}/${projName}`;
export {gitBaseUrl, projName, gitProjUrl}

initializeIcons();

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <FileViewer fileurl={`${gitProjUrl}/README.md`}/>
        <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
);


