import React, {useEffect} from "react";
import {FileCodeIcon} from "@fluentui/react-icons-mdl2";
import "./FileViewer.scss";
import marked from "marked";
import hljs from "highlight.js";
import "./_hljs.scss";


let fileFetcher = (url) => {
    return fetch(url).then((res) => res.text());
};


const FileViewer = (props) => {
    let filename = props.fileurl.substr(props.fileurl.lastIndexOf("/") + 1);

    useEffect(() => {
        fileFetcher("https://raw.githubusercontent.com/NutDevs-org/ModularKit/main/README.md")
            .then((res) => {
                document.querySelector(".file-content").innerHTML = marked(res);
                hljs.highlightAll();
            })
            .catch(() => document.querySelector(".file-content").innerHTML = "<h1>Unable to fetch the file :/</h1>");
    });

    return (
        <main className="main-content">
            <div className="main-content-container">
                <div className="file-content"/>
            </div>
        </main>
    );
};

export default FileViewer;