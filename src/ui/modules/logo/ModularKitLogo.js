import React from "react";
import logo from "./logo.svg";
import "./ModularKitLogo.scss";

const ModularKitLogo = () => {
    return (
        <div className="titlemain-logo">
            <img className="modularkit-logo" src={logo} height="48px" width="48px"
                 alt="ModularKit Header Logo"/>
            <p>ModularKit</p>
        </div>
    );
};

export default ModularKitLogo;