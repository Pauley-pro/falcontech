import React, { Component } from "react";
import { connect } from 'react-redux';
import Shopitems from "./Shopitems.js";




const Shopmain = ({ products }) => {
    return (
        <div>
            (products.map {(prod) => {
                <Shopitems/>
            }})
        </div>
    );
};

const mapStateToProps = state => {
    return{
        products: state.shop.products,
    }
}


export default connect(mapStateToProps)(Shopmain);
