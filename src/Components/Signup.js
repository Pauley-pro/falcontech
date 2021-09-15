import React, { Component } from "react";
import './Signup.css';
import { Button, CustomInput, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input, FormText, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';




class Signup extends Component{
  render(){
    return (
      <div className="form-body">
        
        <Form className = "form">
          <h1>Sign Up</h1>
          <div className="div-form">
            <FormGroup className="form-left">
              <Label for="name">Name:</Label><br/>
              <Input type="text" name="name" id="name" placeholder="Your Full name" required/>
            </FormGroup>

            <FormGroup className="form-right">
              <Label for="name">Lastname:</Label><br/>
              <Input type="text" name="lastname" id="lastname" placeholder="Your Lastname" required/>
            </FormGroup>
          </div>  
          <br/>
          <FormGroup className="mail">
            <Label for="password">Email:</Label><br/>
            <Input type="email" name="email" id="email" placeholder="Your Email" required/>
          </FormGroup>

          <FormGroup className="clear-both">
            <Label for="password">Password:</Label><br/>
            <Input type="password" name="password" id="password" placeholder="Your Password" required/>
          </FormGroup>
        
          <FormGroup className="confirm">
            <Label for="password">Confirm Password:</Label><br/>
            <Input type="password" name="password" id="con-password" placeholder="Confirm password" required/>
          </FormGroup>
          <div className="div-form">
            <FormGroup className="form-left2">
              <Label for="phone number">Phone Number:</Label><br/>
              <Input type="password" name="number" id="contact" placeholder="Phone number" required/>
            </FormGroup>
            <FormGroup className="form-right">
              
              <Input type="submit" name="Submit" id="btn" />
            </FormGroup>
          </div>
        </Form>
        <p className="p-log">Already a member? <Link to="/Login"> Login</Link></p>
    </div>
  );
}
}

export default Signup;
