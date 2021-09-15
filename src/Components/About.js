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
      <div className = "About-main">
        <section className="falconet-breadcromb-area">
          <div className="breadcromb-top section_50">
            <Container>
              <Row>
                <Col md={12}>
                  <div className="breadcromb-top-text">
                    <h2 className="breadcromb-h2">About Falcontech</h2>
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
                  <h2 className="Fal-h2">Welcome to falcontech</h2>
                  <p className="About-h2">We are a surveillance products company located in Ibadan, Nigeria. However, we satisfy clients from every part of the globe. We supply you with cutting-edge CCTV cameras. Each surveillance product you purchase from us leaves you with an enviable edge over the average person.</p>
                  <p className="About-h2">We've very much invested in providing both indoor and outdoor security cameras with high-quality footage. The essence is to keep you one step ahead of whatever is coming and you can access this footage from just about any location.</p>
                  <p className="About-h2">We also offer you a range. You have diverse options to choose from and all these CCTV cameras have the edge we aim to provide you!</p>
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
    
        <div className="statement-res">
                  <h2 className="stat-h2res">What we do</h2>
                  <p className="stat-pares">We provide unique services! We're experts at choosing the best CCTV cameras in the market and we'll deliver those services to your doorsteps. So, you can absolutely rely on us for the security of your home and property when you purchase our CCTV cameras. </p>
                  <p className="stat-pares">At Falcontech, we buy the highest quality cameras to serve you well and bring you value for your money. Additionally, we throw in installation services for you, our valued customers. As such, all you need to do is shop for our products on our website or simply show up at our offices to get a full tour of what we have to offer you.</p>
                  <p className="stat-pares">We assure you that a trial will keep you wanting more. So, what are you waiting for? reach out to Falcontech today and get a fair quote for top-notch CCTV cameras</p>
                </div>
    
    
    
        <section class="falconet-statement-bottom-area section_100">
          <Container>
            <Row>
              <Col md={12}>
                <div className="statement-bottom-wrap">
                  <h2 className="stat-h2">What we do</h2>
                  <p className="stat-pa">We provide unique services! We're experts at choosing the best CCTV cameras in the market and we'll deliver those services to your doorsteps. So, you can absolutely rely on us for the security of your home and property when you purchase our CCTV cameras. </p>
                  <p className="stat-pa">At Falcontech, we buy the highest quality cameras to serve you well and bring you value for your money. Additionally, we throw in installation services for you, our valued customers. As such, all you need to do is shop for our products on our website or simply show up at our offices to get a full tour of what we have to offer you.</p>
                  <p className="stat-pa">We assure you that a trial will keep you wanting more. So, what are you waiting for? reach out to Falcontech today and get a fair quote for top-notch CCTV cameras</p>
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
