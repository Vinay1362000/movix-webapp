import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                 Copyright © 2023 Movix,Inc. All Rights Reserved. Your Ultimate Destination for Movies and TV Shows. 
                </div>
                <div className="socialIcons">
                    <span>
                        <a className="icon" href="https://www.facebook.com/vinay.pratap.31337194" target='_blank' rel='noreferrer'>
                        <FaFacebookF />
                        </a>
                    </span>
                    <span>
                        <a className="icon" href="https://www.instagram.com/_modest.soul_/" target='_blank' rel='noreferrer'>
                        <FaInstagram />
                        </a>
                    </span>
                    <span>
                        <a className="icon" href="https://github.com/vinay1362000/" target='_blank' rel='noreferrer'>
                        <FaGithub />
                        </a>
                    </span>
                    <span>
                        <a className="icon" href=" https://www.linkedin.com/in/vinay-pratap-5219531a1/" target='_blank' rel='noreferrer'>
                        <FaLinkedin />
                        </a>
                    </span>


                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
