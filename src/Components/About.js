import React, { Component } from "react";
import './About.css';
import Layout from "../Components/Layout.js";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AbtImg from '../images/watch-cam.jpg';
import Abtimg from '../images/formimg.jpg';





class About extends Component{
  render(){
    return (
      <div className = "About-main">
        <Layout>
          <section className="falconet-breadcromb-area">
            <div className="breadcromb-top section_50">
              <div className="breadcromb-top-text">
                <h2 className="breadcromb-h2">About Falconet Technology</h2>
              </div>
            </div>

            <div className="breadcromb-bottom">
              <div class="breadcromb-bottom-text">
                <ul>
                  <li><Link to="/Home" id="Breadcromb-bott">home</Link></li>
                  <li><Link to="/Shop"><FaLongArrowAltRight className="Arrow"/></Link></li>
                  <li className="Breadcromb-about">About</li>
                </ul>
              </div>
            </div>
          </section>



          <section className="falconet-about section_100">
            <div className="about-left">
              <img src={AbtImg} alt="about image" className="Abt-img"/>
            </div>
            <div className="about-right">
              <h2 className="Fal-h2">Welcome to Falconet Technologies</h2>
              <p className="About-h2">We are a surveillance products company located in Ibadan, Nigeria. However, we satisfy clients from every part of the globe. We supply you with cutting-edge CCTV cameras. Each surveillance product you purchase from us leaves you with an enviable edge over the average person.</p>
              <p className="About-h2">We've very much invested in providing both indoor and outdoor security cameras with high-quality footage. The essence is to keep you one step ahead of whatever is coming and you can access this footage from just about any location.</p>
              <p className="About-h2">We also offer you a range. You have diverse options to choose from and all these CCTV cameras have the edge we aim to provide you!</p>
            </div>
          </section>
    
          <div className="Clear"></div>
    
          <div className="statement">
            <h2 className="stat-h2">What we do</h2>
            <p className="stat-pa">We provide unique services! We're experts at choosing the best CCTV cameras in the market and we'll deliver those services to your doorsteps. So, you can absolutely rely on us for the security of your home and property when you purchase our CCTV cameras. </p>
            <p className="stat-pa">At Falconet Technology, we buy the highest quality cameras to serve you well and bring you value for your money. Additionally, we throw in installation services for you, our valued customers. As such, all you need to do is shop for our products on our website or simply show up at our offices to get a full tour of what we have to offer you.</p>
            <p className="stat-pa">We assure you that a trial will keep you wanting more. So, what are you waiting for? reach out to Falconet Technology today and get a fair quote for top-notch CCTV cameras</p>
          </div>
          <div className="img-right">
            <img src={Abtimg} className="Abtimg"/>
          </div>
        
          <div className="Clear"></div>
        </Layout>
      </div>     
    );
  }
}

export default About;
