import React from "react";
import './Scrollup.css';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton  ContainerClassName='ScrollUpButton__Container'/>
      </div>
    );
  }
}