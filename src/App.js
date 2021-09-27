import React, { Component } from "react";
import './App.css';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Shoplist from './Components/Shoplist';
import Footer from './Components/Footer.js';
import Scrollup from './Components/Scrollup.js';
import Contact from './Components/Contact.js';
import Cart from './Components/Cart.js';
import ShopDetails from './Components/Shopdetails';
import Vision from './Components/Vision';
import Signup from './Auth-pages/Signup';
import Login from './Auth-pages/Login';
import Mission from './Components/Mission';
import Value from './Components/Value';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
{/*}import Signup from './Components/Signup';
import Login from './Components/Login';{*/}




class App extends Component{
  render(){
    return (
      <div className = "App">
        <div>
          <Router>
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/home" component={Home}/>                     
              <Route path="/about" component={About}/>
              <Route path="/shoplist" component={Shoplist}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/cart" component={Cart}/>
              <Route path="/product/:productId" component={ShopDetails} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route exact path='/vision' component={Vision}/>
              <Route exact path='/mission' component={Mission}/>
              <Route exact path='/value' component={Value}/>
            </Switch>
              
              
              
            
            <div className="Div-fo">
              <Footer/>
            </div>
          </Router>
          
          <Scrollup/>
        </div>
      </div>
    );
  }
}

export default App;
