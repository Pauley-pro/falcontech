import React, { Component } from "react";
import './Building.css';
import Layout from '../Components/Layout.js';
import { Link } from 'react-router-dom';
import Buildimg from '../images/Building-automation.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";



class Build extends Component{
    render(){
        return (
            <div class="falconet-broucher-video">
                <Layout>
                    <section className="falconet-breadcromb-area">
                        <div className="breadcromb-top section_50">
                            <div className="breadcromb-top-text">
                                    <h2 className="breadcromb-h2">Building Automation</h2>
                                </div>
                            </div>

                            <div className="breadcromb-bottom">
                                <div class="breadcromb-bottom-text">
                                    <ul>
                                        <li><Link to="/Home" id="Breadcromb-bott">home</Link></li>
                                        <li><Link to="/Video"><FaLongArrowAltRight className="Arrow"/></Link></li>
                                        <li className="Breadcromb-about">Building Automation</li>
                                    </ul>
                                </div>
                            </div>
                    </section>
                    <div className="Statement">
                        <div className="statement-vid">
                            <img src={Buildimg} className="img-build"/>
                        </div>
                        <div className="statevid-right">
                            <h2>Building Automation</h2>
                            <p className="Para-vid" id="Para-vid">Most people don't know the essence and benefits of building automation, and we’ll briefly delve into it. First, it helps reduce your energy consumption, thereby cutting back on your costs in this area. </p>
                            <p className="Para-vid" id="Para-vid">You’ll also spend less on maintaining your electrical, security, plumbing, cooling and just about every other system on your property because building automation is a way to regulate these devices without supervision. </p> 
                            <p className="Para-vid" id="Para-vid">We make building automation much easier for your property. Technology has made living more effortless, and Falconet Technology makes it easy for you to tap into everything it has to offer. Every piece of equipment you need to easily control your air conditioning, lighting, plumbing, and generally every other system that falls under the HVAC category is available to you at the snap of a finger. </p>
                            <p className="Para-vid" id="Para-vid">Falconet Technology will provide excellent quality building automation systems in the market, so give us a trial today.</p>
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default Build;