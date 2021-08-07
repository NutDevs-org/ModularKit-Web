import hljs from "highlight.js";
import marked from 'marked';
import './_hljs.scss';

const Readme = () => {
    fetch(
        "https://raw.githubusercontent.com/NutDevs-org/ModularKit/main/README.md"
    ).then(
        (res) => res.text()
    ).then(
        (res) => {
            document.querySelector(".file-content").innerHTML = marked(res);
            hljs.highlightAll();
        }
    );
};

export default Readme;