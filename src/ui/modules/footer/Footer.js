import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="main-footer">
                <div className="main-footer-container">
                    <a className="titlemain-logo" href="https://www.sunproject.xyz/">
                        <img className="sunproj-logo" src="https://www.sunproject.xyz/src/img/logo.png" height="48px"
                             width="48px"
                             alt="SunProject.xyz Logo" />
                            <p>NutDevs.org</p>
                    </a>

                    <p className="footer-about">© 2021 NutDevs.org - All right reserved.</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;