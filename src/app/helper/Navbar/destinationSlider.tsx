"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 5,
    slidesToslide: 1,
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 3,
    slidesToslide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToslide: 1,
  },
};

const DestinationSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <div>
        <img
          src="d1.png"
          alt="destination"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="destination__h1">New York</h1>
        <p className="destination__p"> 7 Hotels</p>
      </div>
      <div>
        <img
          src="d2.png"
          alt="destination"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="destination__h1">japan</h1>
        <p className="destination__p"> 6 Hotels</p>
      </div>
      <div>
        <img
          src="d3.png"
          alt="destination"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="destination__h1">Pakistan</h1>
        <p className="destination__p"> 5 Hotels</p>
      </div>
      <div>
        <img
          src="d4.png"
          alt="destination"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="destination__h1">New Jersey</h1>
        <p className="destination__p"> 4 Hotels</p>
      </div>
      <div>
        <img
          src="d5.png"
          alt="destination"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="destination__h1">Orlendo</h1>
        <p className="destination__p"> 2 Hotels</p>
      </div>
      <div>
        <img
          src="d6.png"
          alt="destination"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="destination__h1">Brooklyn</h1>
        <p className="destination__p"> 3Hotels</p>
      </div>
    </Carousel>
  );
};

export default DestinationSlider;
