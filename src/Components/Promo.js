import React, { Component } from "react";
import './Promo.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Vision from '../images/vision.jpg';
import Value from '../images/corevalue.jpg';
import Mission from '../images/mission.jpg';
import { Link } from 'react-router-dom';







class Promo extends Component{
  render(){
    return (
        <div className="Pro-div">
            <div className="Falconet-pro">
                <div className="pro-head">
                    <h2 className="h2-prom">We always provide cost effective security solutions</h2>
                    <div className="falc-div1">
                        <Link to='/vision' >
                            <div className="pro-img">
                                <img src={Vision} className="img-pro"/>
                            </div>
                            <div class="pro-text">
                                <h2 className="pro-link">Our Vision</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="falc-div2">
                        <Link to='/vision' >
                           <div className="pro-img">
                                <img src={Value} className="img-pro"/>
                            </div>
                            <div class="pro-text">
                                <h2 className="pro-link">Our Vision</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="falc-div3" >
                        <Link to='/vision'>
                            <div className="pro-img">
                                <img src={Mission} className="img-pro"/>
                            </div>
                            <div class="pro-text">
                                <h2 className="pro-link">Our Vision</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}


export default Promo;




