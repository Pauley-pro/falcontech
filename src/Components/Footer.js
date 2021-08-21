import React, { Component } from "react";
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Logo from '../images/footer-logo.png';
import { IoImageSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { Link } from 'react-router-dom';





class Footer extends Component{
  render(){
    return (
        <div class="falconet-footer-area">
            <div class="footer-top-area section_50">
                <Container>
                    <Row>
                        <Col md={3} sm={3}>
                            <div className="single-footer-widget footer-logo-widget" id="Single-footer1">
                                <div class="footer-logo">
                                    <Link to="index.html">
                                        <img src={Logo} alt="footer logo" className="Footer-logo"/>
                                    </Link>
                                </div>
                                <div className="footer-widget-text">
                                    <p className="para-foot">Falconet is a standard and well-equipped CCTV security camera installation services company that offers basic services such as the sales, installation, servicing and maintenance of CCTV security camera devices, monitoring services and other related training, advisory and consultancy services.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={3}>
                            <div className="single-footer-widget" id="Single-footer2">
                                <h3>latest post</h3>
                                <div className="latest-post-footer clearfix">
                                    <div className="latest-post-footer-left">
                                        <IoImageSharp/>
                                    </div>
                                    <div className="latest-post-footer-right">
                                        <h4 className="head4"><Link to="#" className="B-link">Revealed: How to set goals for you and your team</Link></h4>
                                        <p className="par-foot" id="par-foot">Jan 14, 2018</p>
                                    </div>
                                </div>
                                <div className="latest-post-footer clearfix">
                                    <div className="latest-post-footer-left">
                                        <FaBriefcase/>
                                    </div>
                                    <div className="latest-post-footer-right" id="latest-post-footer-right">
                                        <h4 className="head4"><Link to="#" className="B-link">Five ways to improve as a business professional!</Link></h4>
                                        <p className="par-foot" id="par-foot">Jan 14, 2018</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={3}>
                            <div className="single-footer-widget" id="Single-footer3">
                                <h3 className="List-m">main links</h3>
                                <ul className="List">
                                    <li><Link to="/About" className="Links">About us</Link></li>
                                    <li><Link to="#" className="Links">Delivery Information</Link></li>
                                    <li><Link to="/Terms" className="Links">Terms & Conditions</Link></li>
                                    <li><Link to="#" className="Links">Privacy Policy</Link></li>
                                    <li><Link to="#" className="Links">Contact us</Link></li>
                                    <li><Link to="#" className="Links">Return Policy</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3} sm={3}>
                            <div className="single-footer-widget"id="Single-footer4">
                                <h3>Newsletter</h3>
                                <p className="para-foot">Don't miss to subscribe to our news feeds, kindly fill the form below.</p>
                                <form>
                                    <input type="email" placeholder="Subscribe"/ >
                                    <button type="submit" ><FaEnvelopeOpen/></button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="copyright-area">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="copyright-right">
                                <p className="para-last" id="para-last">&copy; Copyright <Link to="#" className="Last-footer">FalconTech</Link> All rights reserved</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </div>
    );
  }
}

export default Footer;
