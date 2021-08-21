import React from 'react';
import './Home.css';
import Slider from '../Components/Slider.js';
import Promo from '../Components/Promo.js';
import Service from '../Components/Service.js';
import Counter from '../Components/Counter.js';
import Gallepic from '../Components/Gallery.js';
import Blog from '../Components/Blog.js';
import Testimonials from '../Components/Testimonials.js';
import Broucher from '../Components/Broucher.js';




function Home() {
  return (
    < div className="Home">
      <Slider />
      <Promo />
      <div className="Clear"></div>
      <Service />
      <div className="Clear"></div>
      <Counter />
      <Gallepic />
      <div className="Clear"></div>
      <Testimonials />
      <div className="Clear"></div>
      <Blog />
      <div className="Clear"></div>
      <Broucher />
      <div className="Clear"></div>
    </div>
  );
}

export default Home;
