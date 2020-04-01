import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillAlt, faSmile } from "@fortawesome/free-regular-svg-icons";
import {
  faSortAmountUp,
  faUniversity
} from "@fortawesome/free-solid-svg-icons";

export default function Statistis() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <Card>
            <Card.Body>
              <FontAwesomeIcon icon={faSmile} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card>
            <Card.Body>
              <FontAwesomeIcon icon={faMoneyBillAlt} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={1} md={3}>
          <Card>
            <Card.Body>
              <FontAwesomeIcon icon={faSortAmountUp} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card>
            <Card.Body>
              <FontAwesomeIcon icon={faUniversity} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
