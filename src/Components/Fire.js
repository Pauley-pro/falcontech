import React, { Component } from "react";
import './Fire.css';
import Layout from "../Components/Layout.js";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Fireimg from '../images/Fire-protection.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";



class Fire extends Component{
    render(){
        return (
            <div class="falconet-broucher-video">
                <Layout>
                <section className="falconet-breadcromb-area">
                    <div className="breadcromb-top section_50">
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <div className="breadcromb-top-text">
                                        <h2 className="breadcromb-h2">Fire Protection</h2>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="breadcromb-bottom">
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <div class="breadcromb-bottom-text">
                                        <ul>
                                        <li><Link to="/Home" id="Breadcromb-bott">home</Link></li>
                                        <li><Link to="/Video"><FaLongArrowAltRight className="Arrow"/></Link></li>
                                        <li className="Breadcromb-about">Fire Protection</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>



                <div className="Statement">
                    <Container>
                        <Row>
                            <Col md={6} sm={6}>
                                <div className="statement-vid">
                                    <img src={Fireimg} className="img-fire"/>
                                </div>
                            </Col>
                            <Col md={6} sm={6}>
                                <div className="statevid-right">
                                <h2>Fire Protection</h2>
                                <p className="Para-vid" id="Para-vid">Prevention is better than cure, and this cannot be overemphasized. With fire protection devices from Falcontech, you’ll be able to spot the slightest indications of a fire.</p>
                                <p className="Para-vid" id="Para-vid">They say where there’s smoke, there’s fire, and rightly so. Our smoke detectors are unrivaled, and we bring you the latest ones with the most innovative technology. You don’t even need to be tech-savvy to disable the fire alarms when they come on expertly. We'll provide you with the most straightforward user interface devices without reducing the quality and value for money you’ll get.</p> 
                                <p className="Para-vid" id="Para-vid">Now, what are you waiting for? Invest in the protection of your property from foreseeable and unforeseeable circumstances today!</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                </Layout>
            </div>
        );
    }
}

export default Fire;
