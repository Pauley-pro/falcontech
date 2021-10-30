import React, { Component } from "react";
import './Access.css';
import Layout from '../Components/Layout.js';
import { Link } from 'react-router-dom';
import Accessimg from '../images/Access-control.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";



class Access extends Component{
    render(){
        return (
            <div class="falconet-broucher-video">
                <Layout>
                    <section className="falconet-breadcromb-area">
                        <div className="breadcromb-top section_50">
                           <div className="breadcromb-top-text">
                                <h2 className="breadcromb-h2">Access Control</h2>
                            </div>
                        </div>

                        <div className="breadcromb-bottom">
                            <div class="breadcromb-bottom-text">
                                <ul>
                                    <li><Link to="/Home" id="Breadcromb-bott">home</Link></li>
                                    <li><Link to="/Video"><FaLongArrowAltRight className="Arrow"/></Link></li>
                                    <li className="Breadcromb-about">Access Control</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <div className="Statement">
                        <div className="statement-vid">
                            <img src={Accessimg} className="img-acc"/>
                        </div>
                        <div className="statevid-right">
                            <h2>Access Control</h2>
                            <p className="Para-vid" id="Para-vid">The world is largely unsafe, and the faster we accept that, the better. Limiting access to your property helps you make your world much safer. So why not take the first step today by reaching out to Falconet Technology?</p>
                            <p className="Para-vid" id="Para-vid">We’ll provide you with the best biometry systems, key locks, motion detectors, and essentially every other device that helps you monitor entry and exit to and from your property.</p> 
                            <p className="Para-vid" id="Para-vid">The best part is that the products we sell don't need tech-savvy operators. No, you don't need to be an expert before navigating the controls for the equipment. We ensure that every piece of equipment has a simple user interface for our experienced and non-experienced clients without providing you with inferior products. </p>
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default Access;