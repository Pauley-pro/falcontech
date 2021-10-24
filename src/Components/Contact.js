import React, { Component } from "react";
import './Contact.css';
import Layout from '../Components/Layout.js';
import { FaLongArrowAltRight } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Center from 'react-center';
import { ImLocation2 } from "react-icons/im";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";





function Contact() {
  return (
    < div className="Falconet-map">
      <Layout>
      <section className="falconet-breadcromb-map">
          <div className="breadcromb-top section_50">
            <Container>
              <Row>
                <Col md={12}>
                  <div className="breadcromb-top-text">
                    <h2 className="breadcromb-h2">Contact us</h2>
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
                      <li className="Breadcromb-about">Contact</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <div className="Main-con">
          <div className="con1">
            <div className="div-con1">
              <ImLocation2 className="icontact"/>
            </div>
            <div className="div-con2">
              <h4>LOCATION</h4>
              <p className="par-con">BuildSpace, Opposite U.I Second gate, Ibadan, Oyo State, Nigeria.</p>
            </div>
          </div>
          <div className="con2">
            <div className="div-con1">
              <FaEnvelope className="icontact"/>
            </div>
            <div className="div-con2">
              <h4>EMAIL</h4>
              <p className="par-con">falcontechnigeria@gmail.com</p>
            </div>
          </div>
          <div className="con3">
            <div className="div-con1">
              <FaPhoneAlt className="icontact"/>
            </div>
            <div className="div-con2">
              <h4>GET IN TOUCH</h4>
              <p className="par-con">+2347025007766</p>
            </div>
          </div>
        </div>
        
        <div className="Map">
          <Center>
            <iframe className="Real-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.118390022238!2d3.904862464269562!3d7.452152513739227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed6299bb87cd%3A0xb89ec4b3a3bf5aa1!2sUniversity%20of%20Ibadan%20Second%20Gate%2C%20200132%2C%20Ibadan!5e0!3m2!1sen!2sng!4v1631659028134!5m2!1sen!2sng"  allowfullscreen="" loading="lazy"></iframe>
          </Center>
        </div>  
      </Layout>  
        
    </div>
  );
}

export default Contact;
