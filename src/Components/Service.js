import React, { Component } from 'react';
import './Service.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { FaFireExtinguisher, FaUserShield, FaIntercom } from "react-icons/fa";
import { RiRemoteControlFill, RiSafeFill, RiAlarmWarningFill } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { GiSecurityGate } from "react-icons/gi";
import { Icon } from '@iconify/react';
import cctvIcon from '@iconify-icons/mdi/cctv';
import securityWorker from '@iconify-icons/healthicons/security-worker';







class Service extends Component{
    render(){
      return (
        <div class="falconet-service-area section_t_100 section_b_70">
            <Container>
                <Row>
                    <Col md={12}>
                        <div class="site-heading">
                            <h3 className="div-h3">What We Offer</h3>
                            <h2 className="div-h2">Our Services</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="iconic1">
                        <Col md={4} sm={4}>
                            <div class="single-service" id="sing-icon1">
                                <div class="service-icon">
                                    <Icon icon={cctvIcon} className="icons"/>
                                </div>
                                <h3 className="Serv-h"><Link to="#" className="Serv-link">VIDEO SURVEILLANCE</Link></h3>
                                {/*}<p className="para">Maintenance, repairs and monitoring for clients<br/> irrespective of location.</p>{*/}
                            </div>
                        </Col>
                        <Col md={4} sm={4}>
                            <div class="single-service" id="sing-icon2">
                                <div class="service-icon">
                                    <RiRemoteControlFill className="icons"/>
                                </div>
                                <h3 className="Serv-h"><Link to="#" className="Serv-link">ACCESS CONTROL</Link></h3>
                                {/*}<p className="para">Sales and installation of cctv, IP cameras, nanny<br/> cameras, dummy cams, other various types of<br/> security cameras.</p>{*/}
                            </div>
                        </Col>
                        <Col md={4} sm={4}>
                            <div class="single-service" id="sing-icon3">
                                <div class="service-icon">
                                    <GiSecurityGate className="icons"/>
                                </div>
                                <h3 className="Serv-h"><Link to="#" className="Serv-link">BUILDING AUTOMATION</Link></h3>
                                {/*}<p className="para">Automated gate openers maintenance, repairs and<br/> consultancy services.</p>{*/}
                            </div>
                        </Col>
                    </div>
                </Row>
                <div className="Clear"></div>
                <Row>
                    <div className="iconic2">
                        <Col md={4} sm={4}>
                            <div class="single-service" id="sing-icon4">
                                <div class="service-icon">
                                    <FaFireExtinguisher className="icons"/>
                                </div>
                                <h3 className="Serv-h"><Link to="#" className="Serv-link">FIRE PROTECTION</Link></h3>
                                {/*}<p className="para">Deployment of motion detection alarm systems.</p>{*/}
                            </div>
                        </Col>
                        <Col md={4} sm={4}>
                            <div class="single-service" id="sing-icon5">
                                <div class="service-icon">
                                    <FaIntercom className="icons"/>
                                </div>
                                <h3 className="Serv-h"><Link to="#" className="Serv-link">INTERCOM</Link></h3>
                                {/*}<p className="para">Excellent and uncompromising customer service with<br/> absolute integrity guided by our values and<br/> professional ethics.</p>{*/}
                            </div>
                        </Col>
                        <Col md={4} sm={4}>
                            <div class="single-service" id="sing-icon6">
                                <div class="service-icon">
                                    <RiAlarmWarningFill className="icons"/>
                                </div>
                                <h3 className="Serv-h"><Link to="#" className="Serv-link">SECURITY ALARMS</Link></h3>
                                {/*}<p className="para">User Access Control systems on computerised door<br/> panels</p>{*/}
                            </div>
                        </Col>
                    </div>
                </Row>
                <div className="Clear"></div>
                <Row>
                    <div className="iconic2">
                        <Col md={4} sm={4}>
                            <div class="single-service" id="sing-icon7">
                                <div class="service-icon">
                                    <FaUserShield className="icons"/>
                                </div>
                                <h3 className="Serv-h"><Link to="#" className="Serv-link">SELF DEFENSE SUPPLIES</Link></h3>
                                {/*}<p className="para">Deployment of motion detection alarm systems.</p>{*/}
                            </div>
                        </Col>
                        <Col md={4} sm={4}>
                            <div class="single-service" id="sing-icon8">
                                <div class="service-icon">
                                    <RiSafeFill className="icons"/>
                                </div>
                                <h3 className="Serv-h"><Link to="#" className="Serv-link">WORKPLACE SAFETY SUPPLIES</Link></h3>
                                {/*}<p className="para">Excellent and uncompromising customer service with<br/> absolute integrity guided by our values and<br/> professional ethics.</p>{*/}
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>        
    );
    }
  }
  
  export default Service;

