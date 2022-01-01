import React from "react";
import "./Header.scss";
import ModularKitLogo from "../../Common/Components/ModularKitLogo/ModularKitLogo";
import { PrimaryButton } from "@fluentui/react";

const Header = () => {
  return (
    <header className="main-header">
      <ModularKitLogo />
      <a
        href="https://github.com/NutDevs-org/ModularKit"
        rel="noreferrer"
        target="_blank"
        title="See on Github ..."
      >
        <PrimaryButton text={"View On Github !"} />
      </a>
    </header>
  );
};

export default Header;
