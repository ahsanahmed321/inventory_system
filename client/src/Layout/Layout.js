import React from "react";
import { Component } from "react";
import { Fragment } from "react";
import Navbar from "../Component/Navbar/Navbar";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <main>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
