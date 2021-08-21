import React, { Component } from "react";
import './Shopleft.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Pro from '../images/pro.png';
import Pro2 from '../images/pro-2.png';





class Shopleft extends Component{
    render(){
        return (
            <div className="Shop-left">
                <Col md={3}>
                    <div class="shop-left-sidebar">
                        <div class="shop-sidebar-widget">
                            <form>
                                <input type="search" placeholder="Search..." />
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                        <div class="shop-sidebar-widget widget_product_categories">
                            <h3>by Categories</h3>
                            <ul class="product-categories">
                                <li class="cat-parent current-cat-parent">
                                    <a href="#">home security <span><i class="fa fa-angle-down"></i></span></a>
                                    <ul class="children">
                                        <li class="current-cat"><a href="#">CCTV Camera</a></li>
                                        <li><a href="#">Fingerprint lock </a></li>
                                        <li><a href="#">Digital door sytem</a></li>
                                    </ul>
                                </li>
                                <li class="cat-parent">
                                    <a href="#">Outdoor security <span><i class="fa fa-angle-down"></i></span></a>
                                    <ul class="children">
                                        <li><a href="#">CCTV Camera</a></li>
                                        <li><a href="#">Fingerprint lock</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Cloud Security</a></li>
                                <li><a href="#">Watches</a></li>
                                <li><a href="#">computer Secutity</a></li>
                                <li><a href="#">Guard</a></li>
                                <li><a href="#">Gun Security</a></li>
                            </ul>
                        </div>
                        <div class="shop-sidebar-widget">
                            <h3>related products</h3>
                            <ul class="featured-list">
                                <li class="sidebr-pro-widget">
                                    <div class="product-thumb-info">
                                        <div class="product-thumb-info-image">
                                            <a href="#">
                                                <img src={Pro2} className="Pro-img"/>
                                            </a>
                                        </div>
                                        <div class="product-thumb-info-content">
                                            <h4><a href="#" className="Prod-h4">door lock system</a></h4>
                                            <span class="item-cat">
                                                <a href="#" className="Item-link">
                                                    Stock clearance
                                                </a>
                                            </span>
                                            <span class="price">
                                                $180
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li class="sidebr-pro-widget">
                                    <div class="product-thumb-info">
                                        <div class="product-thumb-info-image">
                                            <a href="#">
                                                <img src={Pro} className="Pro-img"/>
                                            </a>    
                                        </div>
                                        <div class="product-thumb-info-content">
                                            <h4><a href="#" className="Prod-h4">IP CCTV Camera</a></h4>
                                            <span class="item-cat">
                                                <a href="#" className="Item-link">
                                                    Stock clearance
                                                </a>
                                            </span>
                                            <span class="price">
                                                $290
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li class="sidebr-pro-widget">
                                    <div class="product-thumb-info">
                                        <div class="product-thumb-info-image">
                                            <a href="#">
                                                <img src={Pro2} className="Pro-img"/>
                                            </a>
                                        </div>
                                        <div class="product-thumb-info-content">
                                            <h4><a href="#" className="Prod-h4" >door lock system</a></h4>
                                            <span class="item-cat">
                                                <a href="#" className="Item-link">
                                                    Stock clearance
                                                </a>
                                            </span>
                                            <span class="price">
                                                $180
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </div>
        );
    }
}

export default Shopleft;
