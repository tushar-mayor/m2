import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Row className="bg-dark text-light  m-0 justify-content-around align-items-center p-3">
        <Col md={6} lg={3} className="text-center p-2 w-100 ">
          <h1>Phone Repair plus and Vapes</h1>
        </Col>
        <Col md={6} lg={3}>
          <div>
            <h2>Contact Us</h2>
            <h5 className="font-weight-light font-italic">
              Always Here To Help You
            </h5>
            <ul className="list-unstyled text-capitalize font-weight-bold">
              <li>Phone: 01789507470, 07848372777</li>
              <li>Address: 31 henleu street, stratford-upon-avon, CV37 6QW </li>
            </ul>
          </div>
        </Col>
        <Col lg={3}>
          <Row>
            <h1 className="border p-3">Thank Your For Choosing Us!</h1>
          </Row>
        </Col>
      </Row>
    </>
  );
}
