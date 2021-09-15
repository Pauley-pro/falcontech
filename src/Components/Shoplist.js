import React, { useEffect } from "react";
import './Shopitems.css';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/Actions/productActions";
import Shopitems from "./Shopitems";

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'






const Shoplist = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch()

    const fetchProducts = async() => {
        const response = await axios
        .get(" https://falcontech-backend-v1.herokuapp.com/products")
        .catch((err) => {
            console.log("Err", err);
        });
       
        dispatch(setProducts(response.data));
    };

    useEffect(() => {fetchProducts();}, []);
    console.log("Products: ", products);

    return (
        <div className = "Shop">
            <Shopitems/>

            
            <div className="Clear"></div>
        </div>
        
    );
};




export default Shoplist;
