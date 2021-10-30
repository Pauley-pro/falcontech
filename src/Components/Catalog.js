import React, { Component }  from 'react';
import './Catalog.css';
import Layout from '../Components/Layout.js'
import Catalog from 'react-catalog-view';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';



/* This is an example of your JSON data, either use an API call to get the data or provide fixed/hard coded data */
var products =
  [
    {
      id: 1,
      title: "Pistol Shocker",
      /*description: "Very efficient and pictures every movement",*/
      currency: "NGN",
      price: "15000",
      image: "images/Pistol-shocker.jpg",
    },
    {
      id: 2,
      title: "HX-X10 Baton Shocker",
      /*description: "Very efficient and pictures every movement",*/
      currency: "NGN",
      price: "28000",
      image: "images/batonshocker.jpg",
    },
    {
      id: 3,
      title: "928 Stun gun",
      /*description: "Very efficient and pictures every movement",*/
      currency: "NGN",
      price: "22000",
      image: "images/928Stungun.jpg",
    },
    {
      id: 4,
      title: "809 Self-defense flashlight shocker",
      /*description: "Very efficient and pictures every movement",*/
      currency: "NGN",
      price: "22000",
      image: "images/809Self-defenseflashlightshocke.jpg",
    },
    {
      id: 5,
      title: "Pepper spray",
      /*description: "Very efficient and pictures every movement",*/
      currency: "NGN",
      price: "17000",
      image: "images/Still-pepperSpray.jpg",
    },
    {
      id: 6,
      title: "Air Taser",
      /*description: "Very efficient and pictures every movement",*/
      currency: "NGN",
      price: "27000",
      image: "images/Stillairtaser2.jpg",
    },
    {
      id: 7,
      title: "1101 Flashlight Stun Gun",
      /*description: "Very efficient and pictures every movement",*/
      currency: "NGN",
      price: "17000",
      image: "images/flashlightstungun.jpg",
   },
   
    {
      id: 8,
      title: "Stun Master Baton, 800,000v",
      /*description: "Very efficient and pictures every movement",*/
      price: "27000",
      currency: "NGN",
      image: "images/Stunmastgun.jpg",
   },
];

/* Match the Content Keys with the keys in data json */

const CONTENT_KEYS = {
  imgKey: "image",
  cardTitleKey: "title",
  cardDescriptionKey: "description",
  priceKey: "price",
  discountedPriceKey: "discounted",
  priceCurrencyKey: "currency",
  discountCurrencyKey: "currency"
};

function ProductData() {
  return (
   <div className="Catalog">
      <Layout>
      <div className="breadcromb-top section_50">
       <Container>
       <Row>
           <Col md={12}>
           <div className="breadcromb-top-text">
               <h2 className="breadcromb-h2">Featured Products</h2>
           </div>
           </Col>
       </Row>
       </Container>  
       
   </div>
      <Catalog
            data = {products}		
            // Array of JSON Objects (required)
            contentKeys={CONTENT_KEYS}  
            // JSON Object defining the keys that will be 
            // used from the data array, keys should match. (required)
            cardSize="sm"
            // Card sizes, sm, md and lg for small, medium  and large
            //btnOneText="View"
            // Enter text for action button one 
            // or pass empty string to hide.  
            //btnTwoText="Purchase Now"
            // Enter text for action button two 
            // or pass empty string to hide.
            btnOneHandler={(args, event, objectData)=>{
                // 'objectData' returns object data
                // any arguments passed will be before 'event' 
                // and 'objectData'
            }}
            btnTwoHandler={(args, event, row)=>{
                // 'objectData' returns object data
                // any arguments passed will be before 'event' 
                // and 'objectData'
            }}
            skeleton={0}
            // Any non zero number will override default cards
            // and will show that many skeleton cards.
            />
      </Layout>
   </div>
  );
}

export default ProductData;