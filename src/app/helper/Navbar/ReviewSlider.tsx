"use client";
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from './ClientReview';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToslide: 1,
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    slidesToslide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToslide: 1,
  },
};

const ReviewSlider = () => {
  return (
    <Carousel additionalTransfrom={0} autoPlay={true} arrows={true}  autoPlaySpeed={5000} centerMode={false} infinite responsive={responsive} itemClass='item'>
        <ClientReview image="user1.jpg" name="Naruta"/>
        <ClientReview image="user2.jpg" name="Jon"/>
        <ClientReview image="user3.jpg" name="James"/>
        <ClientReview image="user4.jpg" name="Alex"/>
        
    </Carousel>
  );
}

export default ReviewSlider;