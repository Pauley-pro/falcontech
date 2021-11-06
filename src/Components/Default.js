import React, { Component } from "react";
import './Default.css';
import Defimg from '../images/mainnotfound.jpg';


export default class Default extends Component {
  render() {
    return (
      <div className="def-div">
        <img src={Defimg}/>
        <div className="mid-div">
          <div className="def">
            <h1 className="parag-tag">404</h1>
            <h1 className="parag-tag">error</h1>
            <h2 className="parag-tag">page not found</h2>
          </div>
        </div>
      </div>
    );
  }
}
