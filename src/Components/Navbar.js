import React, { useState } from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';
import { BsX as CloseMenu } from 'react-icons/bs';
import { VscMenu as MenuIcon } from 'react-icons/vsc';
import Logo from '../images/site-logo.png';





function Navbar() {
  
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  

  

{/*}const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);{*/}
  
  return (
    <div className="header" id="fixed">
      <div className='navbar-container'>
        <Link to='/Home' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={Logo} alt="Falcontech" className="Site-logo"/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? (<CloseMenu className="menu-icon" />) : (<MenuIcon className="menu-icon" />)}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'} id="Navbar">
          <li className='nav-item' id="nav-item">
            <Link to='/Home' className='nav-links' onClick={closeMobileMenu} id="Link1">
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/About' className='nav-links' onClick={closeMobileMenu} id="Link2">
              About Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Productlist' className='nav-links' onClick={closeMobileMenu} id="Link3">
              Featured Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Contact' className='nav-links' onClick={closeMobileMenu} id="Link4">
              Contact
            </Link>
          </li>
          <li className='nav-item' id="Navitems">
            <Link to='/Login' className='nav-links' onClick={closeMobileMenu} id="Link5">
              Login
            </Link>
          </li>
          <li className='nav-item' id="Navitems2">
            <Link to='/Signup' className='nav-links' onClick={closeMobileMenu} id="Link6">
              Sign Up
            </Link>
          </li>
          
        </ul>
        
        <ul className="users">
          <li className="logy">
            <Link to="/Login" className="login">
              Login
            </Link>
          </li>
          <li className="reg">
            <Link to="/Signup" className="signup">
              SIGN UP
            </Link>
          </li>
          
        </ul>

      </div>



      {/*}<ul className="soc-icons">
          <li>
            <Link to="" className="whatsapp social">
              <FontAwesomeIcon icon={faWhatsapp} size="1x" />
            </Link>
          </li>
          <li>
            <Link to="" className="linkedin social">
              <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
            </Link>
          </li>
          <li>
            <Link to="" className="facebook social">
              <FontAwesomeIcon icon={faFacebookF} size="1x" />
            </Link>
          </li>
          <li>
            <Link to="" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </Link>
          </li>
          <li>
            <Link to="" className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </Link>
          </li>
        </ul>
        {*/}
    
      {/*}<div id="site-logo" onClick={closeMobileMenu}>
        <Link to="/Home">
          <img src={Logo} className="site-logo" />
        </Link>
      </div>
      <div className="header-right">
        <div className="header-right-overlay">
          <p className="single-top-p">Call Us: <Link to="#" className="P-link">+234 702 500 7766</Link></p>
          <ul className="soc-icons">
            <li>
              <Link to="" className="whatsapp social">
                  <FontAwesomeIcon icon={faWhatsapp} size="1x" />
              </Link>
            </li>
            <li>
              <Link to="" className="linkedin social">
                <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
              </Link>
            </li>
            <li>
              <Link to="" className="facebook social">
                <FontAwesomeIcon icon={faFacebookF} size="1x" />
              </Link>
            </li>
            <li>
              <Link to="" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </Link>
            </li>
            <li>
              <Link to="" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="1x" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="single-top" id="single-top1">
          <Link to="" className="Link-top"><FaUser/> Register</Link> or <Link to=""  className="Link-top1">Login</Link>
        </div>
        <div className="single-top2" id="single-top2">
          <Link to="" className="Link-top2">
            <TiShoppingCart/> Cart
          </Link>
        </div>

        
        <div className="Overlay-res">
          <div className="under-over">
            <div id="single-top-res1">
              <Link to="" className="Link-top" id="Link-top"><FaUser/> Register</Link> or <Link to=""  className="Link-top1" >Login</Link>
            </div>
            <div id="single-top-res2">
              <Link to="" className="Link-top2" id="Link-top2">
                <TiShoppingCart/> Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="div-nav">
        <ul className={click ? "nav-options active" : "nav-options"} id="Navbar">
          <li className="option mobile-option" onClick={closeMobileMenu} id="nav1">
            <Link to="/Home" className="Links" id="Link">HOME</Link>
          </li>   
          <li className="option mobile-option" onClick={closeMobileMenu} id="nav2">
            <Link to="/About" className="Links" id="Link">ABOUT US</Link>
          </li>
          <li className="option mobile-option " onClick={closeMobileMenu} id="nav3">
            <div class="dropdown">
              <Link to="#" className="Links" id="Link">SERVICES</Link>
                <div class="dropdown-content">
                  <Link to="/Servicepage">All Services</Link>
                  <Link to="#">Service Details</Link>
                </div>
            </div>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu} id="nav4">
            <div class="dropdown">
              <Link to="#" className="Links" id="Link">PAGES</Link>
              <div class="dropdown-content">
                <Link to="#">PRICING</Link>
                <Link to="/Gallerypage">GALLERY</Link>
                <Link to="#">TEAM MEMBERS</Link>
                <Link to="#">MEMBER PROFILE</Link>
                <Link to="#">404 PAGE</Link>
                <Link to="#">LOGIN</Link>
                <Link to="#">REGISTER</Link>
              </div>
            </div>              
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu} id="nav5">
            <div class="dropdown">
              <Link to="#" className="Links" id="Link">SHOP</Link>
              <div class="dropdown-content">
                <Link to="/Shop" className="Link-drop">SHOP</Link>
                <Link to="#" className="Link-drop">SINGLE SHOP</Link>
                <Link to="#" className="Link-drop">CART</Link>
                <Link to="#" className="Link-drop">CHECKOUT</Link>
              </div>      
            </div>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu} id="nav6">
            <div class="dropdown">
              <Link to="" className="Links" id="Link">BLOG</Link>
              <div class="dropdown-content">
                <Link to="#">BLOG</Link>
                <Link to="#">BLOG DETAILS</Link>
              </div>     
            </div>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu} id="nav7">
            <Link to="" className="Links" id="Link">CONTACT</Link>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (<CloseMenu className="menu-icon" />) : (<MenuIcon className="menu-icon" />)}
      </div>
      <FaSearch className="search"/>
{*/}

      {/*}
      <div className="header-right-overlay1">
        <Col md={9}>
          <div className="header-right" id="top-right">
            <div class="header-right-top">
              <Row>
                <Col md={4}>
                  <div className="single-top-right" id="single-top-right1">
                    <p className="single-top-p">Call Us: <Link to="#" className="P-link">+234 907 472 0638</Link></p>
                  </div>
                </Col>
                      
                <Col md={4}>
                  <div className="single-top-right" id="single-top-right">
                    <ul>
                      <li>
                        <Link to="" className="whatsapp social">
                          <FontAwesomeIcon icon={faWhatsapp} size="1x" />
                        </Link>
                      </li>
                      <li>
                        <Link to="" className="linkedin social">
                          <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
                        </Link>
                      </li>
                      <li>
                        <Link to="" className="facebook social">
                          <FontAwesomeIcon icon={faFacebookF} size="1x" />
                        </Link>
                      </li>
                      <li>
                        <Link to="" className="twitter social">
                          <FontAwesomeIcon icon={faTwitter} size="1x" />
                        </Link>
                      </li>
                      <li>
                        <Link to="" className="instagram social">
                          <FontAwesomeIcon icon={faInstagram} size="1x" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={2} >
                  <div className="single-top" id="single-top1">
                    <Link to="" className="Link-top"><FaUser/> Register</Link> or <Link to=""  className="Link-top1">Login</Link>
                  </div>
                </Col>        
                
                <Col md={2}>
                  <div className="single-top2" id="single-top2">
                    <Link to="" className="Link-top2">
                      <TiShoppingCart/> Cart
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </div>
      
      
      <Container>
        <Row >
          <Col md={3}>
            <div className="site-logo" onClick={closeMobileMenu}>
              <Link to="/Home">
                <img src={Logo} className="site-logo" />
              </Link>
            </div>
          </Col>         
         <div className="div-nav">
          <ul className={click ? "nav-options active" : "nav-options"} id="Navbar">
            <li className="option mobile-option" onClick={closeMobileMenu} id="nav1">
              <Link to="/Home" className="Links" id="Link1">HOME</Link>
            </li>   
            <li className="option mobile-option" onClick={closeMobileMenu} id="nav2">
              <Link to="/About" className="Links" id="Link2">ABOUT US</Link>
            </li>
            <li className="option mobile-option " onClick={closeMobileMenu} id="nav3">
              <div class="dropdown">
                <Link to="#" className="Links" id="Link3">Services</Link>
                <div class="dropdown-content">
                  <Link to="/Servicepage">ALL SERVICES</Link>
                  <Link to="#">SERVICE DETAILS</Link>
                </div>
              </div>
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu} id="nav4">
              <div class="dropdown">
                <Link to="#" className="Links" id="Link4">PAGES</Link>
                <div class="dropdown-content">
                  <Link to="#">PRICING</Link>
                  <Link to="/Gallerypage">GALLERY</Link>
                  <Link to="#">TEAM MEMBERS</Link>
                  <Link to="#">MEMBER PROFILE</Link>
                  <Link to="#">LOGIN</Link>
                  <Link to="#">REGISTER</Link>
                </div>
              </div>              
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu} id="nav5">
              <div class="dropdown">
                <Link to="#" className="Links" id="Link5">SHOP</Link>
                <div class="dropdown-content">
                  <Link to="/Shop" className="Link-drop">SHOP</Link>
                  <Link to="#" className="Link-drop">SINGLE SHOP</Link>
                  <Link to="#" className="Link-drop">CART</Link>
                  <Link to="#" className="Link-drop">CHECKOUT</Link>
                </div>      
              </div>
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu} id="nav6">
              <div class="dropdown">
                <Link to="" className="Links" id="Link6">BLOG</Link>
                <div class="dropdown-content">
                  <Link to="#">BLOG</Link>
                  <Link to="#">BLOG DETAILS</Link>
                </div>     
              </div>
              
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu} id="nav7">
              <Link to="" className="Links" id="Link7">CONTACT</Link>
            </li>
          </ul>
          </div>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (<CloseMenu className="menu-icon" />) : (<MenuIcon className="menu-icon" />)}
          </div>
          <FaSearch className="search"/>
        </Row>
  </Container>{*/}
    </div>
  );
};


export default Navbar