import React, { Component } from "react";
import Carousel from "../../Component/Dashboard_Components/Carousel/Carousel";
import Statistics from "../../Component/Dashboard_Components/Statistics/Statistis";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Statistics />
      </div>
    );
  }
}
