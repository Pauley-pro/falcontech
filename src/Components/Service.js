import React, { Component } from 'react';
import './Service.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';








class Service extends Component{
    render(){
      return (
        <div class="falconet-service-area section_t_100 section_b_70">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="site-heading">
                            <h3 className="div-h3">What We Offer</h3>
                            <h2 className="div-h2">Our Services</h2>
                        </div>
                    </Col>
                </Row>
                <div className="div-service">
                    <Row>
                        <Col xs={6} md={4} >
                            <Link to='/Video' className='But6'>
                                Video Surveillance
                            </Link>
                        </Col>
                        <Col xs={6} md={4}>
                            <Link to='/Access' className='But7'>
                                ACCESS CONTROL
                            </Link>
                        </Col>
                        <Col xs={6} md={4}>
                            <Link to='/Build' className='But8'>
                                BUILDING AUTOMATION
                            </Link>
                        </Col>
                        <Col xs={6} md={4}>
                            <Link to='/Fire' className='But9'>
                                FIRE PROTECTION
                            </Link>
                        </Col>
                        <Col xs={6} md={4}>
                            <Link to='/Intercom' className='But10'>
                                INTERCOM
                            </Link>
                        </Col>
                        <Col xs={6} md={4}>
                            <Link to='/Security' className='But11'>
                                SECURITY ALARMS
                            </Link>
                        </Col>
                        <Col xs={12} md={6}>
                            <Link to='/Self-def' className='Transparent' id='Transparent'>
                                SELF DEFENSE SUPPLIES
                            </Link>
                        </Col>
                        <Col xs={12} md={6}>
                            <Link to='/Workplace' className='Transparent' id='Transparent'>
                                WORKPLACE SAFETY SUPPLIES
                            </Link>
                        </Col>
                    </Row>
                    
                </div>

                
            </Container>
        </div>        
    );
    }
  }
  
  export default Service;

