import React from 'react';
import './Servicepage.css';
import Service from '../Components/Service.js';
import { FaLongArrowAltRight } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';




function Servicepage() {
  return (
    <>
        <section className="falconet-breadcromb-area">
            <div className="breadcromb-top section_50">
                <Container>
                    <Row>
                        <Col md={12}>
                        <div className="breadcromb-top-text">
                            <h2 id="breadcromb-h2">All Services</h2>
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
                      <li><Link to="/Home" className="Breadcromb-bott">home</Link></li>
                      <li><Link to="/Shop"><FaLongArrowAltRight className="Arrow"/></Link></li>
                      <li><Link to="#" className="Breadcromb-bott">Service</Link></li>
                      <li><Link to="/Shop"><FaLongArrowAltRight className="Arrow"/></Link></li>
                      <li id="Serv">All Services</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <Service/>
        <div className="Clear"></div>
    </>
  );
}

export default Servicepage;
