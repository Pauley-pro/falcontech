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
                                            the most successful security <span>agency</span>
                                        </h2>
                                        <p id="Para-slide">
                                            Nunc accumsan metus quis metus. Sed luctus. Mauris eu enim quisque dignissim nequesudm consectetuer dapibus wn eu leo integer varius erat.
                                        </p>
                                        <Link to="#" className="falconet-btn">start a project</Link>
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
                                            Premium Security Services Trusted <span> by Millions</span>
                                        </h2>
                                        <p id="Para-slide">
                                            Nunc accumsan metus quis metus. Sed luctus. Mauris eu enim quisque dignissim nequesudm consectetuer dapibus wn eu leo integer varius erat.
                                        </p>
                                        <Link to="#" class="falconet-btn">learn more</Link>
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
                                            Premium Security Services Trusted<span> by Millions</span>
                                        </h2>
                                        <p id="Para-slide">
                                            Nunc accumsan metus quis metus. Sed luctus. Mauris eu enim quisque dignissim nequesudm consectetuer dapibus wn eu leo integer varius erat.
                                        </p>
                                        <Link to="#" className="falconet-btn">learn more</Link>
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