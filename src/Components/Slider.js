import React, { Component } from "react";
import './Slider.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';






const Slider = () => {
  return (
    <div className="slide-container" id="slide-container">
        <Fade>
            <div className="falconet-main-slide slide-item-1">
                <div className="falconet-main-caption">
                    <div className="falconet-caption-cell">
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <div className="slider-text" id="slider-text">
                                        <h2 className="slide-h2" id="slide-h2">
                                            secure your <span>environment</span>
                                        </h2>
                                        <p id="Para-slide">
                                            Security is the top reason anyone anyone purchases a surveillance camera.
                                        </p>
                                        <Link to="/About" className="falconet-btn">learn more</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>

            <div className="falconet-main-slide slide-item-2">
                <div className="falconet-main-caption">
                    <div className="falconet-caption-cell">
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <div className="slider-text" id="slider-text">
                                        <h2 className="slide-h2" id="slide-h2">
                                            tune into your <span> surroundings</span>
                                        </h2>
                                        <p id="Para-slide">
                                            awareness may not be stressed enough, but it cannot be overemphasised. 
                                        </p>
                                        <Link to="/About" className="falconet-btn">learn more</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>

            <div className="falconet-main-slide slide-item-3">
                <div className="falconet-main-caption">
                    <div className="falconet-caption-cell">
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <div className="slider-text" id="slider-text">
                                        <h2 className="slide-h2" id="slide-h2">
                                            stay one step<span> ahead</span>
                                        </h2>
                                        <p id="Para-slide">
                                            it's not sufficient to own CCTV camera, you need to ensure that you purchase those of excellent quality.
                                        </p>
                                        <Link to="/About" className="falconet-btn">learn more</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
            <div className="falconet-main-slide slide-item-4">
                <div className="falconet-main-caption">
                    <div className="falconet-caption-cell">
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <div className="slider-text" id="slider-text">
                                        <h2 className="slide-h2" id="slide-h2">
                                            give yourself an<span> edge</span>
                                        </h2>
                                        <p id="Para-slide">
                                            Whether you intend to call the police or handle negative situations yourself, you give yourself an edge with Falcontech.
                                        </p>
                                        <Link to="/About" className="falconet-btn">learn more</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </Fade>
    </div>
  )
}







  
  export default Slider;