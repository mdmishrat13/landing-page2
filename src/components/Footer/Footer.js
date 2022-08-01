import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './footer.css'
import logo from './../../images/logo.png'
import { faDiscord,faTwitter } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-items">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="copyright">
                    <p>All Right Reserved</p>
                </div>
                <div className="social-logo">
                    <p>connect with us</p>
                    <div className="icons">
                    <FontAwesomeIcon className='l-icon' icon={faDiscord} />
                    <FontAwesomeIcon icon={faTwitter} />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;