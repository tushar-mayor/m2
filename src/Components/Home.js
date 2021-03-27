import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import NavBar from "./NavBar";
import Welcome from "./Welcome";

export default function Home() {
  return (
    <>
      <div className="HomeCover Cover">
        <NavBar page="home" />
        <Row className="h-100 p-5 text-light font-weight-bold ">
          <Col
            lg={12}
            className="d-flex justify-content-md-center align-items-center"
          >
            <div className="text-center">
              <Row className="row1 ">We Take Care of</Row>
              <Row className="row2">Your Phone!</Row>
              <Button variant="light p-2">See Our Services</Button>
            </div>
          </Col>
        </Row>
      </div>
      <Welcome />
    </>
  );
}
