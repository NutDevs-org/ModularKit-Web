import React from "react";
import ReactDOM from "react-dom";
import "./ui/main/main.scss";
import Header from "./ui/modules/Header/Header";
import Footer from "./ui/modules/Footer/Footer";
import FileViewer from "./ui/modules/FileViewer/FileViewer";

ReactDOM.render(
    <React.Fragment>
        <Header/>
        <FileViewer/>
        <Footer/>
    </React.Fragment>,
    document.getElementById("root")
);


