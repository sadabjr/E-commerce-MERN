import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HomeCarouselData } from "./HomeCarouselData";
import "./style.css";

const items = HomeCarouselData.map((item) => (
  <img className="cursor-pointer" role="presentation" src={item.image} alt="" />
));

const HomeCarousel = () => {
  return (
    <div className="alice">
      <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        infinite
        autoPlayInterval={2000}
      />
    </div>
  );
};

export default HomeCarousel;
