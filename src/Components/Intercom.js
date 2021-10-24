import React, { Component } from "react";
import './Intercom.css';
import Layout from "../Components/Layout.js";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Interimg from '../images/Intercom.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";



class Intercom extends Component{
    render(){
        return (
            <div class="falconet-broucher-video">
                <Layout>
                <section className="falconet-breadcromb-area">
                    <div className="breadcromb-top section_50">
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <div className="breadcromb-top-text">
                                        <h2 className="breadcromb-h2">Intercom</h2>
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
                                        <li><Link to="/Video"><FaLongArrowAltRight className="Arrow"/></Link></li>
                                        <li className="Breadcromb-about">Intercom</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>



                <div className="Statement">
                    <Container>
                        <Row>
                            <Col md={6} sm={6}>
                                <div className="statement-vid">
                                    <img src={Interimg} className="img-int"/>
                                </div>
                            </Col>
                            <Col md={6} sm={6}>
                                <div className="statevid-right">
                                <h2>Intercom</h2>
                                <p className="Para-vid" id="Para-vid">Intercoms have gone beyond what they used to be; you can now pair them with surveillance services to make security airtight and even easier. With a superb quality intercom service, you or your security personnel can adequately monitor security footage without disturbing access to your property. </p>
                                <p className="Para-vid" id="Para-vid">It’s simply a matter of making communication between your security personnel and anyone who wants access to your property more straightforward without displacing the former from their duty post. That way, you leave no loopholes for unauthorized access to your property.</p> 
                                <p className="Para-vid" id="Para-vid">You can also use our intercoms to make communication easier from all parts of your property. We'll hook you up with the most suitable ones regarding size, quality and use cases. </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                </Layout>
            </div>
        );
    }
}

export default Intercom;