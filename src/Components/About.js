import React, { Component } from "react";
import './About.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import AbtImg from '../images/abt-img.jpg'





class About extends Component{
  render(){
    return (
      <div className = "Shop">
        <section className="falconet-breadcromb-area">
          <div className="breadcromb-top section_50">
            <Container>
              <Row>
                <Col md={12}>
                  <div className="breadcromb-top-text">
                    <h2 id="breadcromb-h2">About Falcontech</h2>
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
                      <li><Link to="/Shop"><FaLongArrowAltRight className="Arrow"/></Link></li>
                      <li className="Breadcromb-about">About</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>



        <section className="falconet-about section_100">
          <Container>
            <Row>
              <Col md={6}>
                <div className="about-left">
                  <h2>Welcome to falconet</h2>
                  <p className="About-h2">Pellentesque bibendum. Cras porttitor. Don cursus ante et vulputate feugiat mil justo faucibusn sd Integad elemen tuma volutpat vestibulum enim mi tincidunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incidanaut labore et dolore.dipisicing elit sed do eiusmod tempor incidanaut labore et</p>
                  <p className="About-h2"> congue elit non semper laoreet sed lectus orcil posuer nisl tempor se felis pelentesque inyd urna. Integer vitae felis vel magna posu dul vestibulum. Nam rutrumc diam. Aliquam males uada maurs etulg metu Curabitur laoreet convallis nisal.</p>
                  <Link to="#" className="falcon-btn">Read more</Link>
                </div>
              </Col>
              <Col md={6}>
                <div className="about-right">
                  <img src={AbtImg} alt="about image" className="Abt-img"/>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    
        <div className="Clear"></div>
    
    
    
        <section className="falconet-statement-area section_b_100">
          <Container>
            <Row>
              <Col md={6} sm={6}>
                <div className="statement-left">
                  <h2>Mission Statement</h2>
                  <p>ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ute labore et dolore magna aliqua ut enima minim beniaps quis nostrual exercitationullamco laboris aliqua exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
                </div>
              </Col>
              <Col md={6} sm={6}>
                <div className="statement-right">
                  <h2>Vision Statement</h2>
                  <p>ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ute labore et dolore magna aliqua ut enima minim beniaps quis nostrual exercitationullamco laboris aliqua exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    
    
    
    
    
        <section class="falconet-statement-bottom-area section_100">
          <Container>
            <Row>
              <Col md={12}>
                <div className="statement-bottom-wrap">
                  <h2 className="stat-h2">What we do</h2>
                  <p className="stat-pa">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  <Link to="#" className="falcon-btn">learn more</Link>
                </div>
               </Col>
            </Row>
          </Container>
        </section>
        <div className="Clear"></div>
      </div>     
    );
  }
}

export default About;
