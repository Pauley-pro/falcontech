import React, { Component } from "react";
import './Testimonials.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Client1 from '../images/client1.jpg';
import Client2 from '../images/client2.jpg';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';





class Testimonials extends Component{
    render(){
        return (
            <div>
                <div class="falconet-testimonial-area section_100">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div class="site-heading-black">
                                    <h3 className="test-h3">What They Say</h3>
                                    <h2 className="test-h2">Testimonials</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <div className="testimonial-slide">
                                    <Slide>
                                    <div class="single-testimonial">
                                            <div className="testimonial-text">
                                                <p className="parag">Esse cillum fugiat nulla pariatur excepteur ipsum dolor sit amconsectetur adipisicing elit sedaup eiusmod tempor incididunt labore et dolore magna aliqua lorem ipsum dolor sit ametes etur adipisicing elit usmod tempor incididunt eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                            <div className="testimonial-info">
                                                <div className="info-img">
                                                    <img src={Client1} alt="client" />
                                                </div>
                                                <div className="info-name">
                                                    <h4 className="tes-head">Mike Hussy</h4>
                                                    
                                                    <p className="para-tes">Business Owner, <span className="span">Spain</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="single-testimonial">
                                            <div className="testimonial-text">
                                                <p className="parag">Esse cillum fugiat nulla pariatur excepteur ipsum dolor sit amconsectetur adipisicing elit sedaup eiusmod tempor incididunt labore et dolore magna aliqua lorem ipsum dolor sit ametes etur adipisicing elit usmod tempor incididunt eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                            <div class="testimonial-info">
                                                <div className="info-img">
                                                    <img src={Client2} alt="client" />
                                                </div>
                                                <div class="info-name">
                                                    <h4 className="tes-head">Zenifar Lopez</h4>
                                            
                                                    <p className="para-tes">Business Owner, <span className="span">Spain</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="single-testimonial">
                                            <div className="testimonial-text">
                                                <p className="parag">Esse cillum fugiat nulla pariatur excepteur ipsum dolor sit amconsectetur adipisicing elit sedaup eiusmod tempor incididunt labore et dolore magna aliqua lorem ipsum dolor sit ametes etur adipisicing elit usmod tempor incididunt eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                            <div className="testimonial-info">
                                                <div className="info-img">
                                                    <img src={Client1} alt="client" />
                                                </div>
                                                <div className="info-name">
                                                    <h4 className="tes-head">Mike Hussy</h4>
                                                    
                                                    <p className="para-tes">Business Owner, <span className="span">Spain</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}



export default Testimonials;


