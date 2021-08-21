import React, { Component } from "react";
import './Promo.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Promo1 from '../images/promo-1.jpg';
import Promo2 from '../images/promo-2.jpg';
import Promo3 from '../images/promo-4.jpg';
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
                                <h2 id="Pro-h2">We always try to Provide Cost Effective <span>Security Solutions</span></h2>
                            </div>
                        </Col>
                    </Row>

                    
                    <Row>
                        <div className="div1">
                            <Col md={4} sm={4}>
                                <div className="single-promo">
                                    <div className="promo-image">
                                        <Link to="#">
                                            <img src={Promo1} className="img" id="img"/>
                                        </Link>
                                    </div>
                                    <div class="promo-text">
                                        <h2><Link to="#" className="promo-link">Our Experience</Link></h2>
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <div className="div2">
                            <Col md={4} sm={4}>
                                <div className="single-promo">
                                    <div className="promo-image">
                                        <Link to="#">
                                            <img src={Promo2} className="img" id="img"/>
                                        </Link>
                                    </div>
                                    <div className="promo-text">
                                    <h2><Link to="#" className="promo-link">falconet History</Link></h2>
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <div className="div3">
                            <Col md={4} sm={4}>
                                <div className="single-promo">
                                    <div className="promo-image">
                                        <Link to="#">
                                            <img src={Promo3} className="img" id="img"/>
                                        </Link>
                                    </div>
                                    <div className="promo-text">
                                        <h2><Link to="#" className="promo-link">Our Mission</Link></h2>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </Row>             
                </Container>
            </div>
        </div>
  );
  }
}


export default Promo;




