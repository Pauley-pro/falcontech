import React, { Component } from "react";
import './Self-def.css';
import Layout from '../Components/Layout.js';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Selfimg from '../images/Self-defense.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";



class Selfdef extends Component{
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
                                        <h2 className="breadcromb-h2">Self Defense Supplies</h2>
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
                                        <li className="Breadcromb-about">Self Defense Supplies</li>
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
                                    <img src={Selfimg} className="img-fire"/>
                                </div>
                            </Col>
                            <Col md={6} sm={6}>
                                <div className="statevid-right">
                                <h2>Self Defense Supplies</h2>
                                <p className="Para-vid" id="Para-vid">In terms of self and property protection, you can’t be too careful. With self-defense supplies, you can adequately equip yourself with everything you need to ensure maximum safety in the case of an unforeseen attack.</p>
                                <p className="Para-vid" id="Para-vid">In a world where civil unrest is fast becoming rampant, you’ll be doing yourself a solid by purchasing tasers, stun guns, pepper spray and just about any device you need to protect yourself. </p> 
                                <p className="Para-vid" id="Para-vid">At Falconet Technology, we'll recommend the most suitable ones for your person, and will even guide you on how to use them without harming yourself. Falconet Technology prioritizes the security of self and property, and you'll realize that when you reach out to us.  </p>
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

export default Selfdef;
