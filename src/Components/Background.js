import React, { Component } from "react";
import './Background.css';
import CCTV from '../images/cctv-cam.jpg';
import { Link } from 'react-router-dom';
import Center from 'react-center';



class Background extends Component{
  render(){
    return (
      <div className = "Back-ground">
        <div className="main-back">
          <div className="Back-left"> 
            <Center>
              <img src={CCTV} className="Bimage"/>
            </Center>
          </div>
          <div className="Back-right">
            <h4 className="para-h4">Why Falconet Technology?</h4>
            <h2 className="para-h2">A smarter move for <br/><span className="span-back">ultimate security</span></h2>
            <p className="para-back">We are well-equipped and our consultants are available to mix and match any camera or recommend a custom solution to better meet your needs. Our goal is to provide you with a top-of-the-line HD video monitoring solution from a company you can depend on.</p>
            <Center>
              <Link to='/Contact' className='But-con'>
                CONTACT US
              </Link>
            </Center>
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
