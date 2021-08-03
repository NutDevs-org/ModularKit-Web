import React from 'react';
import './Headerbar.scss'
import ModularKitLogo from "../logo/ModularKitLogo";
import {PrimaryButton} from "@fluentui/react";

const HeaderBar = () => {
    return (
        <header className="main-header">
                <ModularKitLogo />
                <PrimaryButton text={"View On Github !"} onClick={() => window.open("https://github.com/NutDevs-org/ModularKit", "_blank")} />
        </header>
    );
};

export default HeaderBar;