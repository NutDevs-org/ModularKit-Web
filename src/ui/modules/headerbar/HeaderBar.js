import React from 'react';
import './Headerbar.scss'
import ModularKitLogo from "../logo/ModularKitLogo";
import GithubBtn from "../gui/buttons/GithubBtn";

const HeaderBar = () => {
    return (
        <header className="main-header">
                <ModularKitLogo />
                <GithubBtn />
        </header>
    );
};

export default HeaderBar;