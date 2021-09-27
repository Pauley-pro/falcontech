import React, { Component } from "react";
import './Signup.css';
import { Button, CustomInput, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input, FormText, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';




class Login extends Component{
  render(){
    return (
      <div className="form-body">
        <div className="Form-gen">
        <h1 className="head-form">Login</h1>
        
          <Form className = "form">
            <FormGroup className="mail">
              <Label for="password">Email:</Label><br/>
              <Input type="email" name="email" id="email" placeholder="Your Email" required/>
            </FormGroup>

            <FormGroup className="clear-both">
              <Label for="password">Password:</Label><br/>
              <Input type="password" name="password" id="password" placeholder="Your Password" required/>
            </FormGroup>
            <br/>
            <Input type="submit" name="Submit" id="btn-login" />
          </Form>
          </div>
        
        <p className="p-log">Not a member? <Link to="/Signup" className="Reg-link">Sign up</Link></p>
    </div>
  );
}
}

export default Login;
