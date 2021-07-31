import React from 'react';
import './Headerbar.scss'
import ModularKitLogo from "../logo/ModularKitLogo";
import GIthubBtn from "../gui/buttons/GIthubBtn";

const HeaderBar = () => {
    return (
        <header className="main-header">
                <ModularKitLogo />
                <GIthubBtn />
        </header>
    );
};

export default HeaderBar;