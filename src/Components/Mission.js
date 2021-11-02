import React, { Component } from "react";
import './Mission.css';
import Layout from '../Components/Layout.js';
import { Link } from 'react-router-dom';
import Missionpic from '../images/mission.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";






class Mission extends Component{
    render(){
        return (
            <div>
                <Layout>
                    <div class="falconet-broucher-mission"> 
                        <section className="falconet-breadcromb-area">
                            <div className="breadcromb-top section_50">
                                <div className="breadcromb-top-text">
                                    <h2 className="breadcromb-h2">Our Mission</h2>
                                </div>
                            </div>

                            <div className="breadcromb-bottom">
                                <div class="breadcromb-bottom-text">
                                    <ul>
                                        <li><Link to="/Home" id="Breadcromb-bott">home</Link></li>
                                        <li><Link to="/Shop"><FaLongArrowAltRight className="Arrow"/></Link></li>
                                        <li className="Breadcromb-about">Mission</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <div className="Statement">
                            <div className="statement-img">
                                <img src={Missionpic} className="img-st"/>
                            </div>
                            <div className="statement-right">
                                <h2>Mission Statement</h2>
                                <p className="Para1" id="Para1">At Falconet Technology, we provide beyond ordinary services. We offer you a lifestyle! To back up this goal, we ensure that every surveillance product we purchase to sell to you is tested and trusted, thereby keeping you one step ahead.</p>
                                <p className="Para1" id="Para1">How do we go about this? We rely on only the reknowned brands in the surveillance industry and even go beyond that. Our engineers actively await the latest CCTV cameras and swoop them up even before they go mainstream.</p> 
                                <p className="Para1" id="Para1">We assure you that every surveillance product you purchase from us has the latest cutting-edge and and high-end technology. This means you will be able to see what is coming from every angle</p>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default Mission;
