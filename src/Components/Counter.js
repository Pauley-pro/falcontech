import React, { Component } from "react";
import './Counter.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CountUp from 'react-countup';





class Counter extends Component{
  render(){
    return (
        <div>
            <div className="falconet-count-area section_100">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="counts-text">
                                <h3>We are ready to provide security in resonable price and<br/> guarantee your safety in any situation in your life </h3>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} sm={3}>
                            <div className="count-box" id="count-box" >
                                {/*}<h3><CountUp end={2700} duration={5} className="counter"/></h3>{*/}
                                <h3 className="Count-h2"><CountUp start={0} end={2700} delay={0} duration={5}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                        </div>
                                    )}
                                    </CountUp>
                                </h3>
                                <h4>Project <span>Done</span></h4>
                            </div>
                        </Col>
                        <Col md={3} sm={3}>
                            <div className="count-box" id="count-box2">
                                {/*}<h3><CountUp end={1200} duration={5} className="counter"/></h3>{*/}
                                <h3 className="Count-h2"><CountUp start={0} end={1200} delay={0} duration={5}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                        </div>
                                    )}
                                    </CountUp>
                                </h3>
                                <h4>Qualified <span>Employee</span></h4>
                            </div>
                        </Col>
                        <Col md={3} sm={3}>
                            <div className="count-box" id="count-box3">
                                {/*}<h3><CountUp end={3100} duration={5} className="counter"/></h3>{*/}
                                <h3 className="Count-h2"><CountUp start={0} end={3100} delay={0} duration={5}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                        </div>
                                    )}
                                    </CountUp>
                                </h3>
                                <h4>Deal <span>Assigned</span></h4>
                            </div>
                        </Col>
                        <Col md={3} sm={3}>
                            <div className="count-box" id="count-box4">
                                {/*}<h3><CountUp end={2700} duration={5} className="counter"/></h3>{*/}
                                <h3 className="Count-h2"><CountUp start={0} end={2700} delay={0} duration={5}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                        </div>
                                    )}
                                    </CountUp>
                                </h3>
                                <h4>Satisfied <span>Clients</span></h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
  );
  }
}

export default Counter;



