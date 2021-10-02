import React, { Component } from "react";
import './Value.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Valuepic from '../images/corevalue.jpg';
import Valuepic2 from '../images/giveyourselftheedge.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";






class Value extends Component{
    render(){
        return (
            <div class="falconet-broucher-area">
                <section className="falconet-breadcromb-area">
                    <div className="breadcromb-top section_50">
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <div className="breadcromb-top-text">
                                        <h2 className="breadcromb-h2">Our Core Value</h2>
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
                                        <li className="Breadcromb-about">Core Value</li>
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
                                <div className="statement-img">
                                    <img src={Valuepic} className="img-st"/>
                                    <img src={Valuepic2} className="img-st2"/>
                                </div>
                            </Col>
                            <Col md={6} sm={6}>
                                <div className="statement-right">
                                <h2>Core Value Statement</h2>
                                <p id="paragr">We want you to know our core values at Falcontech so yo can know what to expect of us. We prioritise the following;</p>
                                <h4 className="h4-val">Transparency</h4>
                                <p id="paragr">At Falcontech, you can always be assured of transparency. We have no shady dealings; we do not supply surveillance products to people engaging in suspicious activities, and neither do we purchase them from illegal suppliers. 
You can be assured that every product we supply you is of legal origins and can be traced right to the manufacturers.</p>
                                <h4 className="h4-val">Value for Money</h4>
                                <p id="paragr">Falcontech offers you a whopping value for money for every product you purchase from us. We understand that investing large amounts in surveillance can be a significant risk, and we ensure that your investment pays off in the long run. 
All our products are durable and will last you for years. They're also relatively easy to maintain, and we can help you in that aspect too. In the long run, you'll be utterly satisfied with any financial decision you make regarding our services.</p>
                                <h4 className="h4-val">Quality of Service</h4>
                                <p id="paragr">The only guaranteed way to enjoy the benefits of surveillance products is to purchase them from a credible source. At Falcontech, we offer you quality of service for every one of our products. We're confident that every product you buy from us will add value to your property or business. </p>
                                <h4 className="h4-val">Customer Satisfaction</h4>
                                <p id="paragr">Finally, customer satisfaction is the core of our values. You’ll never have reason to complain about any of our products, and that is an assurance. We have approachable employees who will recommend adequate solutions to your security problems and provide you with the right products to ensure your satisfaction. 
You can reach out to us via our website or through a direct visitation to our offices. 
</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
            </div>
        );
    }
}

export default Value;
