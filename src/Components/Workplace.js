import React, { Component } from "react";
import './Self-def.css';
import Layout from '../Components/Layout.js';
import { Link } from 'react-router-dom';
import Workplaceimg from '../images/Workplace-safety.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";



class Workplace extends Component{
    render(){
        return (
            <div class="falconet-broucher-video">
                <Layout>
                    <section className="falconet-breadcromb-area">
                        <div className="breadcromb-top section_50">
                            <div className="breadcromb-top-text">
                                <h2 className="breadcromb-h2">Workplace Safety Supplies</h2>
                            </div>
                        </div>

                        <div className="breadcromb-bottom">
                            <div class="breadcromb-bottom-text">
                                <ul>
                                    <li><Link to="/Home" id="Breadcromb-bott">home</Link></li>
                                    <li><Link to="/Video"><FaLongArrowAltRight className="Arrow"/></Link></li>
                                    <li className="Breadcromb-about">Workplace Safety Supplies</li>
                                </ul>
                            </div>
                        </div>
                    </section>



                    <div className="Statement">
                        <div className="statement-vid">
                            <img src={Workplaceimg} className="img-fire"/>
                        </div>
                        <div className="statevid-right">
                            <h2>Workplace Safety Supplies</h2>
                            <p className="Para-vid" id="Para-vid">We're confident you're aware that one can't be too careful with protection in the workplace. Unfortunately, accidents and mishaps occur; they're an indispensable part of life. Now, what we have is control over how we handle these occurrences.</p>
                            <p className="Para-vid" id="Para-vid">Well-equipped first aid boxes, safety signs, spill kits, and every other workplace safety supply in the market can protect you from hefty lawsuits. Invest in these supplies today to ensure the maximum protection of yourself and your employees in the workplace.  </p> 
                            <p className="Para-vid" id="Para-vid">Falconet Technology will provide you with every device and equipment you need to for a safe workplace environment, and you can contact us for a favorable consultation and quote today.</p>
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default Workplace;
