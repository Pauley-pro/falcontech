import React, { Component } from "react";
import './Vision.css';
import Layout from '../Components/Layout.js';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Visionpic from '../images/vision.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";






class Vision extends Component{
    render(){
        return (
            <div class="falconet-broucher-vision">
                <Layout>
                    <section className="falconet-breadcromb-area">
                        <div className="breadcromb-top section_50">
                            <div className="breadcromb-top-text">
                                <h2 className="breadcromb-h2">Our Vision</h2>
                            </div>
                        </div>

                    <div className="breadcromb-bottom">
                        <div class="breadcromb-bottom-text">
                            <ul>
                                <li><Link to="/Home" id="Breadcromb-bott">home</Link></li>
                                <li><Link to="/Shop"><FaLongArrowAltRight className="Arrow"/></Link></li>
                                <li className="Breadcromb-about">Vision</li>
                            </ul>
                        </div>
                    </div>
                </section>



                <div className="State-vision">
                        <div className="statement-img">
                            <img src={Visionpic} className="img-st"/>
                        </div>
                        
                        <div className="statement-right">
                            <h2>Vision Statement</h2>
                            <p className="Parag1" id="Parag1">Falconet Technology exists for several reasons, however, our priority is to serve and provide you with highly reliable surveillance products. In addition, we have a long-term goal which is to imprint our one-of-a-kind services in your mind. When you think Falconet Technology, you automatically think of quality and high-end utility.</p>
                            <p className="Parag1" id="Parag1">Of course, we are taking active steps towards this goal. Everything that revolves around Falconet Technology aims to achieve it. It ranges from our products down to our customer relations. But, overall, we will leave you smiling from ear to ear with uttermost satisfaction.</p>
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default Vision;
