import React, { Component } from "react";
import './Signup.css';
import { Button, CustomInput, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input, FormText, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import Formimg from '../images/cutting-edge.jpg';
import FormImg from '../images/real-form.jpg';



class Signup extends Component{

  handleSubmit = () => {
    console.log('works');
  };

  render(){
    return (
      <div className="form-body">
        <div className="Form-img">
          <img src={FormImg} className="FormImg"/>
          <br/>
          <img src={Formimg} className="Formimg"/>
        </div>
        <div className="Form-gen">
        
        <h1 className="head-form">Sign <span className="span-form">Up</span></h1>
        <Form className = "form" onSubmit={this.handleSubmit}>
          
          <div className="div-form">
            <FormGroup className="form-left">
              <Label for="name" className="Label">Firstname:</Label><br/>
              <Input type="text" name="name" id="name" placeholder="Your First name" required/>
            </FormGroup>

            <FormGroup className="form-right">
              <Label for="name" className="Label">Lastname:</Label><br/>
              <Input type="text" name="lastname" id="lastname" placeholder="Your Lastname" required/>
            </FormGroup>
          </div>  
          <br/>
          <FormGroup className="mail">
            <Label for="password" className="Label">Email:</Label><br/>
            <Input type="email" name="email" id="email" placeholder="Your Email" required/>
          </FormGroup>

          <FormGroup className="clear-both">
            <Label for="password" className="Label">Password:</Label><br/>
            <Input type="password" name="password" id="password" placeholder="Your Password" required/>
          </FormGroup>
        
          <FormGroup className="confirm">
            <Label for="password" className="Label">Confirm Password:</Label><br/>
            <Input type="password" name="password" id="con-password" placeholder="Confirm password" required/>
          </FormGroup>
          <div className="div-form">
            <FormGroup className="form-left2">
              <Label for="phone number" className="Label">Phone Number:</Label><br/>
              <Input type="password" name="number" id="contact" placeholder="Phone number" required/>
            </FormGroup>
            <FormGroup className="form-right2">
              <Input type="submit" name="Submit" id="btn" />
            </FormGroup>
          </div>
        </Form>
        <p className="p-log">Already a member? <Link to="/Login" className="Login-link"> Login</Link></p>
      </div>
        
        
    </div>
  );
}
}

export default Signup;
