import React from "react";
import { Carousel } from "antd";
import "./Carousel.css";
import Carousel1 from "../../../images/Carousel1.jpg";
import Carousel2 from "../../../images/Carousel2.jpg";
import Carousel3 from "../../../images/Carousel3.jpg";

const CarouselC = () => {
  return (
    <Carousel autoplay effect="fade">
      <div>
        <img className="img-fluid" src={Carousel1} alt="1st" />
      </div>
      <div>
        <img className="img-fluid" src={Carousel2} alt="2nd" />
      </div>
      <div>
        <img className="img-fluid" src={Carousel3} alt="3rd" />
      </div>
    </Carousel>
  );
};

export default CarouselC;
