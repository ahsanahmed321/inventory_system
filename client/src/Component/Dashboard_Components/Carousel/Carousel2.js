import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Carousel1 from "../../../images/Carousel1.jpg";
import Carousel2 from "../../../images/Carousel2.jpg";
import Carousel3 from "../../../images/Carousel3.jpg";
import "./Carousel2.css";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        className="ch"
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        showIndicators={false}
      >
        <div className="ch">
          <img className="img-fluid ch" src={Carousel1} />
        </div>
        <div className="h-100">
          <img className="img-fluid ch" src={Carousel2} />
        </div>
        <div className="h-100">
          <img className="img-fluid ch" src={Carousel3} />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
