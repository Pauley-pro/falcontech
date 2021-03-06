import React, { Component } from "react";
import './Footer.css';
import Logo from '../images/real-form.jpg';
import { RiWhatsappFill } from "react-icons/ri";
import { ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';





const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <>
            <div class="falconet-footer-area" id="falconet-footer-area">
                <div className="Footer1">
                    <ul className="List">
                        <li>
                            <div class="footer-logo">
                                <Link to="/Home">
                                    <img src={Logo} alt="footer logo" className="Footer-logo"/>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="Footer2">
                    <h5 className="h5-foot">Company</h5>
                    <ul className="List">
                    <li className="Sub-list"><Link to="/About" className="test-link">About</Link></li>
                        <li className="Sub-list"><Link to="/Contact" className="test-link">Contact</Link></li>
                        <li className="Sub-list"><Link to="/catalog" className="test-link">Featured Products</Link></li>
                    </ul>
                </div>
                <div className="Footer3">
                    <h5 className="h5-foot">Legal</h5>
                    <ul className="List">
                        <li className="Sub-list"><Link to="/Terms" className="test-link">Terms and Conditions</Link></li>
                    </ul>
                </div>
                <div className="Footer4">
                <h5 className="h5-foot">Follow us</h5>
                    <a href="https://wa.me/2347025007766" rel="noopener noreferrer"><RiWhatsappFill className="Soc-list" id="Soc-list"/></a>
                    <a href="http://twitter.com/falcontechnet" rel="noopener noreferrer"><ImTwitter className="Soc-list"/></a>
                    <a href="http://www.instagram.com/falcontechnet" rel="noopener noreferrer"><FaInstagram className="Soc-list"/></a>
                </div>    
            </div>
            <div className="Copyright-area" id="Copyright-area">
                <p id="para-footer">{year} &copy; Copyright <Link to="#" className="foot-link">Falconet Technology</Link> All rights reserved</p> 
            </div> 
        </>
    );
}

export default Footer;
