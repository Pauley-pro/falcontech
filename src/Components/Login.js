import React, { Component } from "react";
import './Signup.css';
import { Button, CustomInput, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input, FormText, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';




class Login extends Component{
  render(){
    return (
      <div className="form-body">
        
        <Form className = "form">
          <h1>Login</h1>
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
        
        <p className="p-log">Not a member? <Link to="/Sign up">Sign up</Link></p>
    </div>
  );
}
}

export default Login;
