import React, { Component } from 'react';
import './Service.css';
import { Link } from 'react-router-dom';









class Service extends Component{
    render(){
        return (
            <div class="falconet-service-area section_t_100 section_b_70">
                <div class="site-heading">
                    <h3 className="div-h3">What We Offer</h3>
                    <h2 className="div-h2">Our Services</h2>
                </div>
                <div className="div-service">
                    <Link to='/Video' className='But6'>
                        Video Surveillance
                    </Link>
                    <Link to='/Access' className='But7'>
                        ACCESS CONTROL
                    </Link>
                    <Link to='/Build' className='But8'>
                        BUILDING AUTOMATION
                    </Link>
                    <Link to='/Fire' className='But9'>
                        FIRE PROTECTION
                    </Link>
                    <Link to='/Intercom' className='But10'>
                        INTERCOM
                    </Link>
                    <Link to='/Security' className='But11'>
                        SECURITY ALARMS
                    </Link>
                    <Link to='/Self-def' className='Transparent' id='Transparent'>
                        SELF DEFENSE SUPPLIES
                    </Link>
                    <Link to='/Workplace' className='Transparent' id='Transparent'>
                        WORKPLACE SAFETY SUPPLIES
                    </Link>
                </div>
            </div>        
        );
    }
}
  
export default Service;

