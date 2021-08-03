import React from 'react';
import './_Header.scss'
import ModularKitLogo from "../logo/ModularKitLogo";
import {PrimaryButton} from "@fluentui/react";

const Header = () => {
    return (
        <header className="main-header">
                <ModularKitLogo />
                <PrimaryButton text={"View On Github !"} onClick={() => window.open("https://github.com/NutDevs-org/ModularKit", "_blank")} />
        </header>
    );
};

export default Header;