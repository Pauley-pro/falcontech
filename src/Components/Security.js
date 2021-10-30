import React, { Component } from "react";
import './Security.css';
import Layout from '../Components/Layout.js';
import { Link } from 'react-router-dom';
import Secimg from '../images/Security-alarm.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";



class Security extends Component{
    render(){
        return (
            <div class="falconet-broucher-video">
                <Layout>
                    <section className="falconet-breadcromb-area">
                        <div className="breadcromb-top section_50">
                            <div className="breadcromb-top-text">
                                <h2 className="breadcromb-h2">Security Alarm</h2>
                            </div>
                        </div>

                        <div className="breadcromb-bottom">
                            <div class="breadcromb-bottom-text">
                                <ul>
                                    <li><Link to="/Home" id="Breadcromb-bott">home</Link></li>
                                    <li><Link to="/Video"><FaLongArrowAltRight className="Arrow"/></Link></li>
                                    <li className="Breadcromb-about">Security Alarm</li>
                                </ul>
                            </div>
                        </div>
                    </section>



                    <div className="Statement">
                        <div className="statement-vid">
                            <img src={Secimg} className="img-fire"/>
                        </div>
                        <div className="statevid-right">
                            <h2>Security Alarm</h2>
                            <p className="Para-vid" id="Para-vid">Pairing surveillance cameras with security alarms gives you airtight security for your property. Our security alarms at Falconet Technology are highly sensitive and will detect the slightest intrusion and unauthorized access, and alert you long before any damage can be done to your property. </p>
                            <p className="Para-vid" id="Para-vid">When these alarms go off, all you need is a four or six-digit code to disable them. With the proper knowledge, you can adequately protect your property. </p> 
                            <p className="Para-vid" id="Para-vid">Contact us today for a fair quote, and we'll provide you with excellent services that'll give you the uttermost satisfaction. </p>
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default Security;
