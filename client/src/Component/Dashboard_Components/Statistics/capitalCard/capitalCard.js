import React from "react";
import { Card, Col } from "react-bootstrap";

export default function pofitCard(props) {
  return (
    <Col xs={12} sm={6} md={3}>
      <Card>
        <Card.Body>
          <Card.Header>{props.heading}</Card.Header>
          <Card.Text>{props.para}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
