import React from "react";
import "./Footer.scss";
import projManifest from "../../../package.json";

const Footer = () => {
  return (
    <footer className="main-footer">
      <a
        className="sunproj-logo"
        href="https://www.nutdevs.org/"
        rel="noreferrer"
        target="_blank"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="/logo192.png"
          height="48px"
          width="48px"
          alt="NutDevs.org Logo"
        />
        <p>NutDevs.org</p>
      </a>

      <div className="projAbout">
        <p>© {new Date().getFullYear()} NutDevs.org - All rights reserved.</p>
        <a
          href={projManifest.repository}
          rel="noreferrer"
          title="Go to ModularKit-Web ..."
          target="_blank"
          className="buildinfo"
        >
          {projManifest.name}
          <span>@</span>
          {projManifest.version}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
