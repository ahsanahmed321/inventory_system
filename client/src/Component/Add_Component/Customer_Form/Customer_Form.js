import React from "react";
import { Form, Row, Col, Container } from "react-bootstrap";

export default function Customer_Form(props) {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} md={6}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={props.changed}
              type="text"
              id="customer_name"
              placeholder="Customer Name..."
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <Form.Group>
            <Form.Label>Contact</Form.Label>
            <Form.Control
              onChange={props.changed}
              type="number"
              id="contact_no"
              placeholder="Contact Number..."
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              onChange={props.changed}
              type="text"
              id="address"
              placeholder="City..."
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={props.changed}
              type="text"
              id="city"
              placeholder="Address..."
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}
