import React from 'react';
import './_Footer.scss';

const Footer = () => {
    return (
        <footer className="main-footer">
            <a className="titlemain-logo" href="https://www.sunproject.xyz/">
                <img className="sunproj-logo" src="/logo192.png" height="48px"
                     width="48px"
                     alt="SunProject.xyz Logo"/>
                <p>NutDevs.org</p>
            </a>

            <p className="footer-about">© 2021 NutDevs.org - All right reserved.</p>
        </footer>
    );
};

export default Footer;