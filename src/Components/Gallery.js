import React, { Component } from "react";
import './Gallery.css';
import Gallery1 from '../images/gallery-1.jpg';
import Gallery2 from '../images/gallery-2.jpg';
import Gallery3 from '../images/gallery-3.jpg';
import Gallery4 from '../images/gallery-4.jpg';
import Gallery5 from '../images/gallery-5.jpg';
import Gallery6 from '../images/gallery-6.jpg';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';




class Gallepic extends Component{
    render(){
        return (
            <div className = "Gallery">
                <div class="falconet-gallery-area section_100">
                    <div class="site-heading">
                        <h3 className="Gal-h3">See Our Experience</h3>
                        <h2 className="Gal-h2">Our Portfolio</h2>
                    </div>
                    <Gallery>
                        <div className="Gallery1">
                            <div className="single-gallery-img" id="div1">
                                <Item
                                    original={Gallery1}
                                    thumbnail={Gallery1}
                                    width="550"
                                    height="300"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={Gallery1} className="img-div1"/>
                                    )}
                                </Item> 
                            </div>
                            <div className="single-gallery-img" id="div2">
                                <Item
                                    original={Gallery2}
                                    thumbnail={Gallery2}
                                    width="550"
                                    height="300"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={Gallery2} className="img-div2"/>
                                    )}
                                </Item>
                            </div>
                            <div className="single-gallery-img" id="div3">
                                <Item
                                    original={Gallery3}
                                    thumbnail={Gallery3}
                                    width="550"
                                    height="300"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={Gallery3} className="img-div3"/>
                                    )}
                                </Item>
                            </div>
                        </div>
                        <div className="Gallery2">
                            <div className="single-gallery-img" id="div4">
                                <Item
                                    original={Gallery4}
                                    thumbnail={Gallery4}
                                    width="550"
                                    height="300"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={Gallery4} className="img-div4"/>
                                    )}
                                </Item>
                            </div>
                            <div class="single-gallery-img" id="div5">
                                <Item
                                    original={Gallery5}
                                    thumbnail={Gallery5}
                                    width="550"
                                    height="300"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={Gallery5} className="img-div5"/>
                                    )}
                                </Item>
                            </div>
                            <div class="single-gallery-img" id="div6">
                                <Item
                                    original={Gallery6}
                                    thumbnail={Gallery6}
                                    width="550"
                                    height="300"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={Gallery6} className="img-div6"/>
                                    )}
                                </Item>
                            </div>
                        </div>
                    </Gallery>
                </div>
            </div>
        );
    }
}

export default Gallepic;