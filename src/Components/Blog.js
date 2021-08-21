import React, { Component } from "react";
import './Blog.css';
import Blog1 from "../images/blog-1.jpg";
import Blog2 from "../images/blog-2.jpg";
import Blog3 from "../images/blog-3.jpg";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';






class Blog extends Component{
  render(){
        return (
            <div className = "falconet-blog-area section_t_100 section_b_70">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="site-heading">
                                <h3 className="Blog-h3">Security Information</h3>
                                <h2 className="Blog-h2">Our Latest News</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} sm={4}>
                            <div className="single-blog1">
                                <div className="blog-image">
                                    <Link to="#">
                                        <img src={Blog1} alt="blog" className="Blogs"/>
                                    </Link>
                                </div>
                                <div className="blog-text">
                                    <h2><Link to="#" className="blogT">Security System Of Any Building</Link></h2>
                                    <div class="blog-meta">
                                        <p>-: Jan 20, 2018   /   Admin   /   6 Likes</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={4}>
                            <div className="single-blog2">
                                <div className="blog-image">
                                    <Link to="#">
                                        <img src={Blog2} alt="blog" className="Blogs"/>
                                    </Link>
                                </div>
                                <div class="blog-text">
                                    <h2><Link to="#" className="blogT">Don’t Worry Your Data is Safe</Link></h2>
                                    <div className="blog-meta">
                                        <p>-: Jan 20, 2018   /   Admin   /   6 Likes</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={4}>
                            <div className="single-blog3">
                                <div className="blog-image">
                                    <Link to="#">
                                        <img src={Blog3} alt="blog" className="Blogs"/>
                                    </Link>
                                </div>
                                <div className="blog-text">
                                    <h2><Link to="#" className="blogT">Go next we are always with you</Link></h2>
                                    <div className="blog-meta">
                                        <p>-: Jan 20, 2018   /   Admin   /   6 Likes</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Blog;
