import React, { Component } from "react";
import CustomerForm from "../../Component/Add_Component/Customer_Form/Customer_Form";
import ProductForm from "../../Component/Add_Component/Product_Form/Product_Form";
import { Button } from "react-bootstrap";

export default class Container2 extends Component {
  render() {
    return (
      <div>
        <CustomerForm />
        <ProductForm />
        <Button>Sumbit</Button>
      </div>
    );
  }
}
