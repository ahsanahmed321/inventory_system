import React from "react";
import { Form } from "react-bootstrap";

export default function Customer_Form() {
  return (
    <Form>
      <h3>Add Payment</h3>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Customer Name..." />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Contact</Form.Label>
        <Form.Control type="number" placeholder="Contact Number..." />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City..." />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address..." />
      </Form.Group>
    </Form>
  );
}
