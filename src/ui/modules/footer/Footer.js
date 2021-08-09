import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="main-footer">
            <a className="titlemain-logo" href="https://www.nutdevs.org/">
                <img className="sunproj-logo" src="/logo192.png" height="48px"
                     width="48px"
                     alt="NutDevs.org Logo"/>
                <p>NutDevs.org</p>
            </a>

            <p className="footer-about">© 2021 NutDevs.org - All right reserved.</p>
        </footer>
    );
};

export default Footer;