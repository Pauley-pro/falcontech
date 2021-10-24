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
      title: "Stun Master Baton",
      /*description: "Very efficient and pictures every movement",*/
      currency: "NGN",
      price: "27000",
      image: "images/Stillstun-masterbaton.jpg",
    },
    {
      id: 7,
      title: "Air Taser",
      /*description: "Very efficient and pictures every movement",*/
      currency: "NGN",
      price: "27000",
      image: "images/Stillairtaser2.jpg",
    },
    {
      id: 8,
      title: "Flashlight Stun Gun",
      /*description: "Very efficient and pictures every movement",*/
      currency: "NGN",
      price: "15000",
      image: "images/Stillflashlightstungun.jpg",
    },
    {
      id: 9,
      title: "928 Stun gun 980,000v",
      /*description: "Very efficient and pictures every movement",*/
      currency: "NGN",
      price: "17000",
      image: "images/928Stungun.jpg",
   },
   {
      id: 10,
      title: "1101 Flashlight Stun Gun",
      /*description: "Very efficient and pictures every movement",*/
      currency: "NGN",
      price: "17000",
      image: "images/flashlightstungun.jpg",
   },
   {
      id: 11,
      title: "Air taser with 3 cartridges",
      /*description: "Very efficient and pictures every movement",*/
      price: "27000",
      currency: "NGN",
      /*discounted: "15",*/
      image: "images/airtaser.jpg",
   },
   {
      id: 12,
      title: "Flashlight Stun gun",
      /*description: "Very efficient and pictures every movement",*/
      currency: "NGN",
      price: "15000",
      image: "images/Flashlight.jpg",
   },
   {
      id: 13,
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
               <h2 className="breadcromb-h2">Our Products</h2>
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




/*
import React from 'react';
import './Catalog.css';
import Catalog from 'react-catalog-view';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



    
    
      var products = 
       [
         {
            id: 1,
            title: "HX-X10 Baton Shocker",
           // description: "High quality canvas shoes.",//
            price: "28,000",
            //discounted: "15",//
            currency: "NGN",
            image: "images/cctv_1.png",
         },
         {
            id: 2,
            title: "Sport shoes",
            description: "Sporty shoes, durable at affordable ranges.",
            price: "25",
            currency: "$",
            discounted: "15",
            image: "images/cctv_2.png",
         },
         {
            id: 3,
            title: "Heels",
            description: "Fashionable trendy heels.",
            currency: "$",
            price: "30",
            image: "images/cctv_1.png",
         },
         {
            id: 4,
            title: "Canvas",
            description: "High quality canvas shoes.",
            price: "20",
            discounted: "15",
            currency: "NGN",
            image: "http://domain.com/images/1.jpg",
         },
         {
            id: 5,
            title: "Sport shoes",
            description: "Sporty shoes, durable at affordable ranges.",
            price: "25",
            currency: "$",
            discounted: "15",
            image: "http://domain.com/images/5.jpg",
         },
         {
            id: 6,
            title: "Heels",
            description: "Fashionable trendy heels.",
            currency: "$",
            price: "30",
            image: "http://domain.com/images/6.jpg",
         },
         {
            id: 7,
            title: "Canvas",
            description: "High quality canvas shoes.",
            price: "20",
            discounted: "15",
            currency: "NGN",
            image: "http://domain.com/images/1.jpg",
         },
         {
            id: 8,
            title: "Sport shoes",
            description: "Sporty shoes, durable at affordable ranges.",
            price: "25",
            currency: "$",
            discounted: "15",
            image: "http://domain.com/images/5.jpg",
         },
         {
            id: 9,
            title: "Heels",
            description: "Fashionable trendy heels.",
            currency: "$",
            price: "30",
            image: "http://domain.com/images/6.jpg",
         },
         {
            id: 10,
            title: "Canvas",
            description: "High quality canvas shoes.",
            price: "20",
            discounted: "15",
            currency: "NGN",
            image: "http://domain.com/images/1.jpg",
         },
         {
            id: 11,
            title: "Sport shoes",
            description: "Sporty shoes, durable at affordable ranges.",
            price: "25",
            currency: "$",
            discounted: "15",
            image: "http://domain.com/images/5.jpg",
         },
         {
            id: 12,
            title: "Heels",
            description: "Fashionable trendy heels.",
            currency: "$",
            price: "30",
            image: "http://domain.com/images/6.jpg",
         },
         {
            id: 13,
            title: "Canvas",
            description: "High quality canvas shoes.",
            price: "20",
            discounted: "15",
            currency: "NGN",
            image: "http://domain.com/images/1.jpg",
         },
         {
            id: 14,
            title: "Sport shoes",
            description: "Sporty shoes, durable at affordable ranges.",
            price: "25",
            currency: "$",
            discounted: "15",
            image: "http://domain.com/images/5.jpg",
         },
         {
            id: 15,
            title: "Heels",
            description: "Fashionable trendy heels.",
            currency: "NGN",
            price: "30",
            src: "https://www.google.com/search?q=pepperspray&sxsrf=AOaemvJPEaqsd1yyglx3aSEVq8JnRcrCog:1634851530231&tbm=isch&source=iu&ictx=1&fir=AkYvkWLavOvy5M%252CacobNVqWZo5P5M%252C_%253B5N8oqA9QCm7ISM%252CHC8U1NKgLVz2BM%252C_%253Bf9H2tZf6DRgShM%252C5WLetdBqHvb0SM%252C_%253Bqd1BN-og7rbtfM%252Cb8kbUUodkTCutM%252C_%253ByycmYlWVOJKBQM%252CSxg9Bc8PVfrt6M%252C_%253BsnPoyCT698KIgM%252CTe-2JkrYMkOCUM%252C_%253BrNsfAP7alDbYNM%252C2RWIV1HK6XTo_M%252C_%253B0jVSLAhRcU74BM%252C2RWIV1HK6XTo_M%252C_%253B0LTvynJPq4rnuM%252CTe-2JkrYMkOCUM%252C_%253BV7VpTq2jR3HVKM%252CIcsBv2tZ7C-mAM%252C_&vet=1&usg=AI4_-kS-__fbqtynK3tICTlH0kfifyWuGA&sa=X&ved=2ahUKEwiL6ODFuNzzAhUPD2MBHbttDBUQ9QF6BAg5EAE#imgrc=qd1BN-og7rbtfM",
         }

      ];
 
      const CONTENT_KEYS = 
      {             
         imgKey: "src",
         cardTitleKey: "title",
         cardDescriptionKey: "description",
         priceKey: "price",
         discountedPriceKey: "discounted",
         priceCurrencyKey: "currency",
         discountCurrencyKey: "currency"
      };
      function ProductData(props){
      return(
          <div className="Catalog">
            <div className="breadcromb-top section_50">
                <Container>
                <Row>
                    <Col md={12}>
                    <div className="breadcromb-top-text">
                        <h2 className="breadcromb-h2">Our Products</h2>
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
            btnOneText="View"
            // Enter text for action button one 
            // or pass empty string to hide.  
            btnTwoText="Purchase Now"
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
        </div>
    )
}


export default ProductData;*/