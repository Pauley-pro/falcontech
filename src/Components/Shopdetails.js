import React, { useEffect } from "react";
import './Shopdetails.css';
import '../App.css';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../Redux/Actions/productActions.js";



const ShopDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchShopDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchShopDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="prod-details">
          <div className="middle aligned row" id="prod-asst">
            <div className="ui vertical divider" id="vert-line">AND</div>
            <div className="column lp" id="prodimg-div">
              <img className="prod-image" src={image} />
            </div>
              
            <div className="column rp" id="prodimg-right">
              <h1>{title}</h1>
            <h2>
              <a className="ui teal tag label">${price}</a>
            </h2>
            <h3 className="ui brown block header">{category}</h3>
            <p>{description}</p>
            <div className="ui vertical animated button" tabIndex="0">
              <div className="hidden content">
                <i className="shop icon"></i>
              </div>
              <div className="visible content">Add to Cart</div>
                </div>
            </div>
          </div>
          
        </div>
      )}

      
    </div>
  );
};
  
  export default ShopDetails;