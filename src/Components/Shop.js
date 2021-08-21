import React, { Component } from "react";
import './Shop.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Product1 from '../images/product-1.jpg';
import Product2 from '../images/product-2.jpg';
import Product3 from '../images/product-3.jpg';
import Product4 from '../images/product-4.jpg';
import Product5 from '../images/product-5.jpg';
import Product6 from '../images/product-6.jpg';
import Shopleft from '../Components/Shopleft.js';
import Pro from '../images/pro.png';
import Pro2 from '../images/pro-2.png';
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";




class Shop extends Component{
  render(){
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

            <section class="falconet-shop-page-area section_100">
                <Container>
                    <Row>
                        <Shopleft/>
                        <div className="Shop-right">
                            <Col md={9}>
                                <div class="falconet-shop-left margin-top">
                                    <div class="shorting">
                                        <Row>
                                            <Col sm={6}>
                                                <p>Showing 1–6 of 7 results</p>
                                            </Col>
                                            <Col sm={6}>
                                                <form method="post">
                                                    <label>
                                                        <select>
                                                            <option value="0" selected="selected">Default Shorting</option>
                                                            <option value="1">Sort by popularity</option>
                                                            <option value="2">Sort by average rating</option>
                                                            <option value="3">Sort by newness</option>
                                                            <option value="4">Sort by price: low to high</option>
                                                        </select>
                                                    </label>
                                                </form>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Row>
                                        <Col md={4} sm={4}>
                                            <div class="single-shop-product">
                                                <div class="single-product-image">
                                                    <a href="#">
                                                    <img src={Product1} className="Prod"/>
                                                    </a>
                                                </div>
                                                <div class="single-product-text">
                                                    <h3>
                                                        <a href="#">Wireless IP Camera</a>
                                                    </h3>
                                                    <div class="product-price">
                                                        <h3>$190</h3>
                                                        <ul class="product-rating">
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsStarHalf/></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-button">
                                                        <a href="#">add to cart</a>
                                                        <a href="#"><i class="fa fa-heart"></i></a>
                                                        <a href="#"><i class="fa fa-refresh"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4} sm={4}>
                                            <div class="single-shop-product">
                                                <div class="single-product-image">
                                                    <a href="#">
                                                    <img src={Product2} className="Prod"/>
                                                    </a>
                                                </div>
                                                <div class="single-product-text">
                                                    <h3>
                                                        <a href="#">Indoor Camera</a>
                                                    </h3>
                                                    <div class="product-price">
                                                        <h3>$230</h3>
                                                        <ul class="product-rating">
                                                        <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsStarHalf/></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-button">
                                                        <a href="#">add to cart</a>
                                                        <a href="#"><i class="fa fa-heart"></i></a>
                                                        <a href="#"><i class="fa fa-refresh"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4} sm={4}>
                                            <div class="single-shop-product">
                                                <div class="single-product-image">
                                                    <a href="#">
                                                    <img src={Product3} className="Prod"/>
                                                    </a>
                                                </div>
                                                <div class="single-product-text">
                                                    <h3>
                                                        <a href="#">Door Lock System</a>
                                                    </h3>
                                                    <div class="product-price">
                                                        <h3>$230</h3>
                                                        <ul class="product-rating">
                                                        <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsStarHalf/></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-button">
                                                        <a href="#">add to cart</a>
                                                        <a href="#"><i class="fa fa-heart"></i></a>
                                                        <a href="#"><i class="fa fa-refresh"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4} sm={4}>
                                            <div class="single-shop-product">
                                                <div class="single-product-image">
                                                    <a href="#">
                                                    <img src={Product4} className="Prod"/>
                                                    </a>
                                                </div>
                                                <div class="single-product-text">
                                                    <h3>
                                                        <a href="#">RFID card access</a>
                                                    </h3>
                                                    <div class="product-price">
                                                        <h3>$310</h3>
                                                        <ul class="product-rating">
                                                        <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsStarHalf/></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-button">
                                                        <a href="#">add to cart</a>
                                                        <a href="#"><i class="fa fa-heart"></i></a>
                                                        <a href="#"><i class="fa fa-refresh"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4} sm={4}>
                                            <div class="single-shop-product">
                                                <div class="single-product-image">
                                                    <a href="#">
                                                    <img src={Product5} className="Prod"/>
                                                    </a>
                                                </div>
                                                <div class="single-product-text">
                                                    <h3>
                                                        <a href="#">Pin protected lock </a>
                                                    </h3>
                                                    <div class="product-price">
                                                        <h3>$210</h3>
                                                        <ul class="product-rating">
                                                        <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsStarHalf/></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-button">
                                                        <a href="#">add to cart</a>
                                                        <a href="#"><i class="fa fa-heart"></i></a>
                                                        <a href="#"><i class="fa fa-refresh"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4} sm={4}>
                                            <div class="single-shop-product">
                                                <div class="single-product-image">
                                                    <a href="#">
                                                    <img src={Product5} className="Prod"/>
                                                    </a>
                                                </div>
                                                <div class="single-product-text">
                                                    <h3>
                                                        <a href="#">fire alarm</a>
                                                    </h3>
                                                    <div class="product-price">
                                                        <h3>$130</h3>
                                                        <ul class="product-rating">
                                                        <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsStarHalf/></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-button">
                                                        <a href="#">add to cart</a>
                                                        <a href="#"><i class="fa fa-heart"></i></a>
                                                        <a href="#"><i class="fa fa-refresh"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4} sm={4}>
                                            <div class="single-shop-product">
                                                <div class="single-product-image">
                                                    <a href="#">
                                                    <img src={Product6} className="Prod"/>
                                                    </a>
                                                </div>
                                                <div class="single-product-text">
                                                    <h3>
                                                        <a href="#">Door Lock System</a>
                                                    </h3>
                                                    <div class="product-price">
                                                        <h3>$230</h3>
                                                        <ul class="product-rating">
                                                        <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsStarHalf/></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-button">
                                                        <a href="#">add to cart</a>
                                                        <a href="#"><i class="fa fa-heart"></i></a>
                                                        <a href="#"><i class="fa fa-refresh"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4} sm={4}>
                                            <div class="single-shop-product">
                                                <div class="single-product-image">
                                                    <a href="#">
                                                    <img src={Product4} className="Prod"/>
                                                    </a>
                                                </div>
                                                <div class="single-product-text">
                                                    <h3>
                                                        <a href="#">RFID card access</a>
                                                    </h3>
                                                    <div class="product-price">
                                                        <h3>$310</h3>
                                                        <ul class="product-rating">
                                                        <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsStarHalf/></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-button">
                                                        <a href="#">add to cart</a>
                                                        <a href="#"><i class="fa fa-heart"></i></a>
                                                        <a href="#"><i class="fa fa-refresh"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4} sm={4}>
                                            <div class="single-shop-product">
                                                <div class="single-product-image">
                                                    <a href="#">
                                                        <img src={Product1} className="Prod"/>
                                                    </a>
                                                </div>
                                                <div class="single-product-text">
                                                    <h3>
                                                        <a href="#">Wireless IP Camera</a>
                                                    </h3>
                                                    <div class="product-price">
                                                        <h3>$190</h3>
                                                        <ul class="product-rating">
                                                        <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsFillStarFill/></li>
                                                            <li><BsStarHalf/></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-button">
                                                        <a href="#">add to cart</a>
                                                        <a href="#"><i class="fa fa-heart"></i></a>
                                                        <a href="#"><i class="fa fa-refresh"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <Row>
                                    <Col md={12}>
                                        <div class="pagination-box">
                                            <ul class="pagination">
                                                <li><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
                                                <li><a href="#">1</a></li>
                                                <li class="active"><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li><a href="#">5</a></li>
                                                <li><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </section>
            <div className="Clear"></div>
        </div>
        
    );
  }
}

export default Shop;
