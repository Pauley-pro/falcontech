import React from 'react';
import './Home.css';
import Layout from '../Components/Layout';
import Slider from '../Components/Slider.js';
import Promo from '../Components/Promo.js';
import Service from '../Components/Service.js';
import Counter from '../Components/Counter.js';
import Gallepic from '../Components/Gallery.js';
import Background from '../Components/Background';






function Home() {
  return (
    <div className="Home">
      <Layout>
      <Slider />
      <div className="Clear"></div>
      <Promo />
      <div className="Clear"></div>
      <Service />
      <div className="Clear"></div>
      <Background />
      <div className="Clear"></div>
      <Counter />
      <div className="Clear"></div>
      <Gallepic />
      <div className="Clear"></div>
      </Layout>
      
    </div>
  );
}

export default Home;
