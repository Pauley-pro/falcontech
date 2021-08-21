import React, { Component } from "react";
import './App.css';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Shop from './Components/Shop.js';
import Footer from './Components/Footer.js';
import Scrollup from './Components/Scrollup.js';
import Servicepage from './Components/Servicepage.js';
import Terms from './Components/Terms.js';
import Gallerypage from './Components/Gallerypage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



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
              <Route path="/shop" component={Shop}/>
              <Route path="/servicepage" component={Servicepage}/>
              <Route path="/terms" component={Terms}/>
              <Route path="/gallerypage" component={Gallerypage}/>
            </Switch>

            <Footer/>
          </Router>
          
          <Scrollup/>
        </div>
      </div>
    );
  }
}

export default App;
