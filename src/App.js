import React, { Component } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home.js';
import About from './Components/About.js';
import Scrollup from './Components/Scrollup.js';
import Contact from './Components/Contact.js';
import Catalog from './Components/Catalog.js';
import Cart from './Components/Cart.js';
import Vision from './Components/Vision';
import Signup from './Auth-pages/Signup';
import Login from './Auth-pages/Login';
import Mission from './Components/Mission';
import Productlist from './Components/Productlist';
import Product from './Components/Product';
import Details from './Components/Details';
import Value from './Components/Value';
import Video from './Components/Video';
import Access from './Components/Access';
import Build from './Components/Building';
import Fire from './Components/Fire';
import Intercom from './Components/Intercom';
import Security from './Components/Security';
import Selfdef from './Components/Self-def';
import Workplace from './Components/Workplace';
import Default from './Components/Default';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';





class App extends Component{
  render(){
    return (
      <div className = "App">
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/home" component={Home}/>                     
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/cart" component={Cart}/>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route exact path='/vision' component={Vision}/>
              <Route exact path='/productlist' component={Productlist}/>
              <Route exact path='/product' component={Product}/>
              <Route exact path='/details' component={Details}/>
              <Route exact path='/mission' component={Mission}/>
              <Route exact path='/value' component={Value}/>
              <Route exact path='/catalog' component={Catalog}/>
              <Route exact path='/video' component={Video}/>
              <Route exact path='/access' component={Access}/>
              <Route exact path='/build' component={Build}/>
              <Route exact path='/fire' component={Fire}/>
              <Route exact path='/intercom' component={Intercom}/>
              <Route exact path='/security' component={Security}/>
              <Route exact path='/self-def' component={Selfdef}/>
              <Route exact path='/workplace' component={Workplace}/>
              <Route  component={Default}/>
            </Switch>
          </Router>
          
            
          <Scrollup/>
        </div>
      </div>
    );
  }
}

export default App;
