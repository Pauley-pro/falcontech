import React, { Component } from "react";
import './Promo.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Vision from '../images/vision.jpg';
import Value from '../images/corevalue.jpg';
import Mission from '../images/mission.jpg';
import { Link } from 'react-router-dom';







class Promo extends Component{
  render(){
    return (
        <div className = "Promo">
            <div className="falconet-promo-area section_100">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="promo-heading" id="promo-heading">
                                <h2 id="Pro-h2">We always Provide Cost Effective <span>Security Solutions</span></h2>
                            </div>
                        </Col>
                    </Row>

                    
                    <Row>
                        <Link to='/vision' >
                            <div className="div1">
                                <Col md={4} sm={4}>
                                    <div className="single-promo">
                                        <div className="promo-image">
                                            <img src={Vision} className="img" id="img"/>
                                        </div>
                                        <div class="promo-text">
                                            <h2 className="promo-link" id="promo-link">Our Vision</h2>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Link>
                        <Link to="/value">
                            <div className="div2">
                                <Col md={4} sm={4}>
                                    <div className="single-promo">
                                        <div className="promo-image">
                                            <img src={Value} className="img" id="img"/>
                                        </div>
                                        <div className="promo-text">
                                        <h2 className="promo-link" id="promo-link">Our Core Value</h2>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Link>
                        <Link to='/mission'>
                            <div className="div3">
                                <Col md={4} sm={4}>
                                    <div className="single-promo">
                                        <div className="promo-image">
                                            <img src={Mission} className="img" id="img"/>
                                        </div>
                                        <div className="promo-text">
                                            <h2 className="promo-link" id="promo-link">Our Mission</h2>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Link>
                    </Row>             
                </Container>
            </div>
        </div>
  );
  }
}


export default Promo;




