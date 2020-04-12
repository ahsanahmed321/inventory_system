import React from "react";
import { Form } from "react-bootstrap";

export default function Customer_Form(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={props.changed}
          type="text"
          id="customer_name"
          placeholder="Customer Name..."
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Contact</Form.Label>
        <Form.Control
          onChange={props.changed}
          type="number"
          id="contact_no"
          placeholder="Contact Number..."
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control
          onChange={props.changed}
          type="text"
          id="address"
          placeholder="City..."
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control
          onChange={props.changed}
          type="text"
          id="city"
          placeholder="Address..."
        />
      </Form.Group>
    </Form>
  );
}
