import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './carousel.css';

const CarouselExp = () => {
  return ( 
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../assets/livecode.jpg")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../assets/lewagon2.jpg")}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../assets/lewagonteam.jpg")}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
   );
}
 
export default CarouselExp;
