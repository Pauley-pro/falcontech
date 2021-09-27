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
                <div className="div-service">
                    <Row>
                        <Col xs={6} md={4}>
                            <Link to='/Full' className='But6'>
                                Video Surveillance
                            </Link>
                        </Col>
                        <Col xs={6} md={4}>
                            <Link to='/Full' className='But7'>
                                ACCESS CONTROL
                            </Link>
                        </Col>
                        <Col xs={6} md={4}>
                            <Link to='/Full' className='But8'>
                                BUILDING AUTOMATION
                            </Link>
                        </Col>
                        <Col xs={6} md={4}>
                            <Link to='/Full' className='But9'>
                                FIRE PROTECTION
                            </Link>
                        </Col>
                        <Col xs={6} md={4}>
                            <Link to='/Full' className='But10'>
                                INTERCOM
                            </Link>
                        </Col>
                        <Col xs={6} md={4}>
                            <Link to='/Full' className='But11'>
                                SECURITY ALARMS
                            </Link>
                        </Col>
                        <Col xs={12} md={6}>
                            <Link to='/Full' className='Transparent'>
                                SELF DEFENSE SUPPLIES
                            </Link>
                        </Col>
                        <Col xs={12} md={6}>
                            <Link to='/Full' className='Transparent'>
                                WORKPLACE SAFETY SUPPLIES
                            </Link>
                        </Col>
                    </Row>
                    
                </div>

                {/*}<Row>
                    <Col xs={6} md={4} lg={3}>
                        <div class="single-service" id="sing-icon1">
                            <div class="service-icon">
                                <Icon icon={cctvIcon} className="icons"/>
                            </div>
                            <h3 className="Serv-h" id="Serv-h">Video Surveillance</h3>
                            <p className="para">We exist to provide you with the ability to stay conversant and abreast with happenings around you. You get to monitor every activity even if you weren't present when it occurred. Every CCTV camera you purchase from us assures you of the best video footage quality and you can access it from just anywhere without you having to be within your property</p>
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <div class="single-service" id="sing-icon2">
                            <div class="service-icon">
                                <RiRemoteControlFill className="icons"/>
                            </div>
                            <h3 className="Serv-h" id="Serv-h">ACCESS CONTROL</h3>
                            <p className="para">We will provide you with the best biometry systems, key locks, motion detectors and essentially every other device that helps you moonitor entry and exit to and from your property. We assure you that every piece of equipment has a simple user interface for our experienced and non-experienced clients.</p>
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <div class="single-service" id="sing-icon3">
                            <div class="service-icon">
                                <GiSecurityGate className="icons"/>
                            </div>
                            <h3 className="Serv-h" id="Serv-h">BUILDING AUTOMATION</h3>
                            <p className="para">We will provide you the benefits of excellent and quality building automation. In this, you'll spend less on electrical, security, plumbing, cooling and just about every other system as every piece of equipment you need to control them is available at the snap of a finger</p>
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <div class="single-service" id="sing-icon4">
                            <div class="service-icon">
                                <FaFireExtinguisher className="icons"/>
                            </div>
                            <h3 className="Serv-h" id="Serv-h">FIRE PROTECTION</h3>
                            <p className="para">We will provide you with fire protection devices that will enable you spot the slightest indications of fire. Our smoke detectors ate unrivaled and we'll provide with the most straightforward user interface devices without reducing the quality and value for money.</p>
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <div class="single-service" id="sing-icon5">
                            <div class="service-icon">
                                <FaIntercom className="icons"/>
                            </div>
                            <h3 className="Serv-h" id="Serv-h">INTERCOM</h3>
                            <p className="para">We can help you pair intercoms with surveillance services to make ecurity airtight and even easier. With a superp quality intercom service, you or your security personnel can adequately monitor security footage without disturbing access to your property and communicate easily from all parts of your property.</p>
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <div class="single-service" id="sing-icon6">
                            <div class="service-icon">
                                <RiAlarmWarningFill className="icons"/>
                            </div>
                            <h3 className="Serv-h" id="Serv-h">SECURITY ALARMS</h3>
                            <p className="para">We provide you scirity alarms that are highly sensitive and will detect the slightest intrusion and unauthorised access and alert you long before any damage can be done to your property. This enables you to pair surveillance cameras with security alarms which gives you airtight security for your property</p>
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <div class="single-service" id="sing-icon7">
                            <div class="service-icon">
                                <FaUserShield className="icons"/>
                            </div>
                            <h3 className="Serv-h" id="Serv-h">SELF DEFENSE SUPPLIES</h3>
                            <p className="para">With self-defense supplies, you can adequately equip yourself with everything you need to ensure maximum safety in the case of an unforseen attack. At Falcontech, we'll recommend the moost suitable ones for your person and will guide you on how to use them without harming yourself.</p>
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <div class="single-service" id="sing-icon8">
                            <div class="service-icon">
                                <RiSafeFill className="icons"/>
                            </div>
                            <h3 className="Serv-h" id="Serv-h">WORKPLACE SAFETY SUPPLIES</h3>
                            <p className="para">We provide you with every device and equipment you need for a safe workplace environment such as Well-equipped first aid boxes, safety signs, spill kits, and every other workplace safety supply in the market can protect you from hefty lawsuits. Invest in these supplies today to ensure the maximum protection of yourself and your employees in the workplace. </p>
                        </div>
                    </Col>
      </Row>{*/}
            </Container>
        </div>        
    );
    }
  }
  
  export default Service;

