import React, { Component } from "react";
import './Productlist.css';
import Product from "./Product";
import { ProductConsumer } from "../Context";
import Layout from '../Components/Layout';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";



export default class ProductList extends Component {
  render() {
    return (
      <>
        <Layout>
          <div className="Prod-list">
          <div className="breadcromb-top section_50">
            <div className="breadcromb-top-text">
              <h2 className="breadcromb-h2">Featured Products</h2>
           </div>
           
          </div>
          <div className="py-5">
            <div className="container">
              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
          </div>
        </Layout>
      </>
    );
  }
}
