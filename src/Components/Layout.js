import React from 'react';
import Navbar from '../Components/Navba.js';
import Footer from '../Components/Foote.js';
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
        <main>
          {
            children
          }
        </main>
      <div className="div-lay">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;