import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HomeCarouselData } from "./HomeCarouselData";

const items = HomeCarouselData.map((item) => (
  <img className="cursor-pointer" role="presentation" src={item.image} alt="" />
));

const HomeCarousel = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      controlsStrategy="alternate"
      disableButtonsControls
      autoPlay
      infinite
      autoPlayInterval={2000}
    />
  );
};

export default HomeCarousel;
