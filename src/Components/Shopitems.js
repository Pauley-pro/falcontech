import React, { Component } from "react";
import './Shopitems.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";




const Shopitems = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const {id, title, image, price, category} = product;
        return (
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                        </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    })
    
    return (
        <div className = "Shop">
            <section className="falconet-breadcromb-area">
                <div className="breadcromb-top section_50">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="breadcromb-top-text">
                                    <h2 id="breadcromb-h2">Categories</h2>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div class="breadcromb-bottom">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div class="breadcromb-bottom-text">
                                    <ul>
                                        <li><Link to="/Home" className="Breadcromb-bott">home</Link></li>
                                        <li><Link to="/Shop"><FaLongArrowAltRight className="Arrow"/></Link></li>
                                        <li><Link to="/Shop" className="Breadcromb-bott">shop</Link></li>
                                        <li><Link to="/Shop"><FaLongArrowAltRight className="Arrow"/></Link></li>
                                        <li className="Breadcromb-bott">categories</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            
            
                <div className="ui grid container">{renderList}</div>
            
            

            
            <div className="Cls"></div>
        </div>
        
    );
};




export default Shopitems;
