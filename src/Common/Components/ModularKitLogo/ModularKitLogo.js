import React from "react";
import logo from "./logo.svg";

const ModularKitLogo = () => {
  return (
    <div
      className="applogo"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        className="modularkit-logo"
        src={logo}
        height="48px"
        width="48px"
        alt="ModularKit Header Logo"
      />
      <p>ModularKit</p>
    </div>
  );
};

export default ModularKitLogo;
