import React, { Component } from "react";
import CustomerForm from "../../Component/Add_Component/Customer_Form/Customer_Form";
import ProductForm from "../../Component/Add_Component/Product_Form/Product_Form2";
import { Button } from "react-bootstrap";
import axios from "axios";

export default class Container2 extends Component {
  state = {
    payment: {
      date: "",
      customer: {},
      product: []
    },
    productHolder: [],
    deletedProduct: {}
  };

  dateChangeHandler = e => {
    this.setState({
      payment: {
        ...this.state.payment,
        date: e.target.value
      }
    });
  };

  customerChangeHandler = e => {
    this.setState({
      payment: {
        ...this.state.payment,
        customer: {
          ...this.state.payment.customer,
          [e.target.id]: e.target.value
        }
      }
    });
  };

  productChangeHandler = e => {
    var index = e.target.id.split("_");
    var id = index[2] + "_" + index[3];
    console.log(id);
    console.log(index);

    let copy = this.state.productHolder.slice();
    copy[index[1]] = {
      ...copy[index[1]],
      [id]: e.target.value
    };

    this.setState({ productHolder: copy });
    this.setState({
      payment: {
        ...this.state.payment,
        product: copy
      }
    });
  };

  optionChangeHandler = e => {
    var copy = [...this.state.productHolder];
    var options = e.split(" ");
    console.log(options);

    if (options[0] === "paying" || options[0] === "non_paying") {
      copy[options[1]] = {
        ...copy[options[1]],
        payment: options[0]
      };
    }

    if (options[0] === "credit" || options[0] === "personal") {
      copy[options[1]] = {
        ...copy[options[1]],
        ownership: options[0]
      };
    }

    this.setState({ productHolder: copy });
    this.setState({
      payment: {
        ...this.state.payment,
        product: copy
      }
    });
  };

  deleteProductHandler = data => {
    var copy = [...this.state.productHolder];
    copy.splice(data, 1);
    this.setState({ productHolder: copy });
  };

  sumbitButtonHandler = () => {
    console.log(this.state);
    axios
      .post("http://localhost:5000/api/payment/add", this.state.payment)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2>Add Payment</h2>
        <p>Date</p>
        <input onChange={this.dateChangeHandler} type="date"></input>
        <CustomerForm changed={this.customerChangeHandler} />
        <ProductForm
          changed={this.productChangeHandler}
          clicked={this.deleteProductHandler}
          option={this.optionChangeHandler}
        />
        <Button onClick={this.sumbitButtonHandler}>Sumbit</Button>
      </div>
    );
  }
}
