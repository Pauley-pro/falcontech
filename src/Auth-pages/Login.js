import React, { Component } from "react";
import './Signup.css';
import { Button, CustomInput, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input, FormText, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import Formimg from '../images/cutting-edge.jpg';
import FormImg from '../images/real-form.jpg';




class Login extends Component{
  render(){
    return (
      <div className="form-body">
        <div className="Form-img">
          <Link to="/Home"><img src={FormImg} className="FormImg"/></Link>
          <br/>
          <img src={Formimg} className="Formimg"/>
        </div>
        <div className="Form-login">
          <h1 className="head-form">Log <span className="span-form">in</span></h1>
          
            <Form className = "form" id="Form">
              <FormGroup className="mail">
                <Label for="password" className="Label">Email:</Label><br/>
                <Input type="email" name="email" id="email" placeholder="Your Email" required/>
              </FormGroup>

              <FormGroup className="clear-both">
                <Label for="password" className="Label">Password:</Label><br/>
                <Input type="password" name="password" id="password" placeholder="Your Password" required/>
              </FormGroup>
              <br/>
              <Input type="submit" name="Submit" id="btn-login" />
            </Form>
            <p className="p-log" id="p-log">Not a member? <Link to="/Signup" className="Login-link">Sign up</Link></p>
        </div>
      </div>
  );
}
}

export default Login;
