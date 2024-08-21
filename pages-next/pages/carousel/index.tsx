import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselPage() {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mx-auto bg-teal-300">
      <Slider {...settings} className="border-4 border-red-700">
        <div>
          <img
            src="/images/428473282_3532189650427603_3888295199210630195_n.jpg"
            className="size-[400px]"
          />
        </div>

        <div>
          <img
            src="/images/428473282_3532189650427603_3888295199210630195_n.jpg"
            className="size-[400px]"
          />
        </div>

        <div>
          <img
            src="/images/428473282_3532189650427603_3888295199210630195_n.jpg"
            className="size-[400px]"
          />
        </div>

        <div>
          <img
            src="/images/428473282_3532189650427603_3888295199210630195_n.jpg"
            className="size-[400px]"
          />
        </div>

        <div>
          <img
            src="/images/428473282_3532189650427603_3888295199210630195_n.jpg"
            className="size-[400px]"
          />
        </div>

        <div>
          <img
            src="/images/428473282_3532189650427603_3888295199210630195_n.jpg"
            className="size-[400px]"
          />
        </div>
      </Slider>
    </div>
  );
}

export default CarouselPage;
