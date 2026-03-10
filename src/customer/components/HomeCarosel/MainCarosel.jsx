import React from "react";
import { homeCarouselData } from "./HomeCaroselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const MainCarosel = () => {
  const items = homeCarouselData.map((item) => (
    <img
      className="cursor-pointer"
      role="presentation"
      src={item.image}
      alt=""
    />
  ));

  return (
    <div className="relative px-4 sm:px-8 ">
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          // responsive={responsive}
          // controlsStrategy="alternate"
          disableButtonsControls
          autoPlay
          autoPlayInterval={1000}
          infinite
        />
      </div>
    </div>
  );
};

export default MainCarosel;
