import React from 'react';
import './_Header.scss'
import ModularKitLogo from "../logo/ModularKitLogo";
import GithubBtn from "../gui/buttons/GithubBtn";

const Header = () => {
    return (
        <header className="main-header">
                <ModularKitLogo />
                <GithubBtn />
        </header>
    );
};

export default Header;