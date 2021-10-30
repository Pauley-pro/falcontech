import React, { Component } from "react";
import './Counter.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CountUp, { startAnimation } from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import { IoMdMedal }  from "react-icons/io";
import { FaDumbbell, FaHandHoldingUsd, FaUserFriends } from "react-icons/fa";







class Counter extends Component{
    
  render(){
    return (
        <div className="falconet-count-area section_100">
            <div className="falc-count">
                
                            <div className="counts-text">
                                <h3 id="Count-h3">We are ready to provide security in resonable price and guarantee your safety in any situation in your life </h3>
                            </div>
                      
                            <div className="count-box" id="count-box">
                                <FaDumbbell className="Count-icon"/>
                                <h3 className="Count-h2" id="Count-h2">
                                    <CountUp end={2700} duration={5} redraw={true} suffix="+" className="counts">
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h3>
                                <h4 className="Count-h4">Project <span>Done</span></h4>
                            </div>
                        
                            <div className="count-box" id="count-box2">
                                <FaUserFriends className="Count-icon"/>
                                <h3 className="Count-h2" id="Count-h2">
                                    <CountUp end={1200} duration={5} redraw={true} suffix="+">
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h3>
                                <h4 className="Count-h4">Our <span>Clients</span></h4>
                            </div>
                        
                            <div className="count-box" id="count-box3">
                                <FaHandHoldingUsd className="Count-icon"/>
                                <h3 className="Count-h2" id="Count-h2">
                                    <CountUp end={3100} duration={5} redraw={true} suffix="+">
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h3>
                                <h4 className="Count-h4">Deal <span>Assigned</span></h4>
                            </div>
                        
                            <div className="count-box" id="count-box4">
                            <IoMdMedal className="Count-icon"/>
                                <h3 className="Count-h2" id="Count-h2">
                                    <CountUp end={2700} duration={5} redraw={true} suffix="+">
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h3>
                                <h4 className="Count-h4">Satisfied <span>Clients</span></h4>
                            </div>
                        
            </div>
        </div>
  );
  }
}

export default Counter;



