import React, { Component } from "react";
import "./Details.css";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { RiWhatsappFill } from "react-icons/ri";



export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            img,
            info,
            infoList1,
            infoList2,
            infoList3,
            infoList4,
            price,
            title,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* End of title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>NGN</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    product description:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <p className="text-muted lead">{infoList1}</p>
                  <p className="text-muted lead">{infoList2}</p>
                  <p className="text-muted lead">{infoList3}</p>
                  <p className="text-muted lead">{infoList4}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/Productlist" className="Det-button1">
                      Back to products
                    </Link>
                    <a href="https://wa.me/2347025007766" className="Det-button2">
                      <RiWhatsappFill/> Chat us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
