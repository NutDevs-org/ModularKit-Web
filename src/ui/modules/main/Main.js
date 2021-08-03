import React from 'react';
import './_Main.scss';
import Readme from "../readme/Readme";

const Main = () => {
    return (
        <main class="main-content">
            <div class="main-content-container">
                <header class="md-head-info">
                    <i class="fab fa-readme"/>
                    <a class="file-name" title="View it on Sonikalize"
                       href="https://repo.sunproject.xyz/NutDevs.org/ModularKit/src/branch/main/README.md"
                       target="_blank">README.md</a>
                </header>
                <div class="file-content">
                    <Readme/>
                </div>
            </div>
        </main>
    );
};

export default Main;