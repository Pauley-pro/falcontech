import React, { Component } from "react";
import './Video.css';
import Layout from '../Components/Layout.js';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Videoimg from '../images/Video surveillance.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";



class Video extends Component{
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
                                        <h2 className="breadcromb-h2">Video Surveillance</h2>
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
                                        <li className="Breadcromb-about">Video Surveillance</li>
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
                                    <img src={Videoimg} className="img-vid"/>
                                </div>
                            </Col>
                            <Col md={6} sm={6}>
                                <div className="statevid-right">
                                <h2>Video Surveillance</h2>
                                <p className="Para-vid" id="Para-vid">Did you know that video surveillance is one of the most reliable ways to stay conversant with happenings around you? You get to monitor every activity, even if you weren’t present when it occurred. It's a credible way for you to keep abreast of what's happening around you and give you enough time to prepare a defense if you have to. 
At Falcontech, we exist to provide you with the best! Every CCTV camera you purchase from us assures you of the best video footage quality, and you can access it from just about anywhere.
</p>
                                <p className="Para-vid" id="Para-vid">With surveillance cameras from Falcontech, you don't have to be within your property before you can protect it. You can also access footage from any point of the day; that way, nothing skips your attention, giving you the highly sought-after medium to stay a step ahead. </p> 
                                <p className="Para-vid" id="Para-vid">Knowledge is power, and the avenue to see what’s coming from every angle gives you access to that power. So why not seize it today by buying the best CCTV cameras in the market? .</p>
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

export default Video;
