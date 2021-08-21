import React, { Component } from "react";
import './Broucher.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { IoMdCloudDownload } from 'react-icons/io';
import { AiFillFilePdf } from 'react-icons/ai';






class Broucher extends Component{
    render(){
        return (
            <div class="falconet-broucher-area">
                <Container>
                    <Row>
                        <Col md={9} sm={8}>
                            <div className="broucher-overlay">
                                <div className="broucher-left">
                                    <h3 className="broucher-h3" id="broucher-h3">Download our corporate brochure</h3>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={4}>
                            <div className="broucher-right">
                                <div className="download-btn">
                                    <Link to="#" className="download-broucher" id="download-broucher">Download.Pdf<AiFillFilePdf className="brouch-icon"/> <IoMdCloudDownload className="brouch-icon1"/></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Broucher;
