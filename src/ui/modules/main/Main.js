import React, { useEffect, useState } from 'react';
import './_Main.scss';
import Readme from "../readme/Readme";

const Main = () => {
    const setLoaded = useState(false);

    useEffect(() => {
        Readme(() => {
            setLoaded(true);
        });
    });

    return (
        <main class="main-content">
            <div class="main-content-container">
                <header class="md-head-info">
                    <i class="fab fa-readme"/>
                    <a class="file-name" title="View it on Sonikalize"
                       href="https://repo.sunproject.xyz/NutDevs.org/ModularKit/src/branch/main/README.md"
                       target="_blank" rel="noreferrer" >README.md</a>
                </header>
                <div class="file-content">
                </div>
            </div>
        </main>
    );
};

export default Main;