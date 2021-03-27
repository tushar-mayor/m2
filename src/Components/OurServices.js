import React from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "./NavBar";
import Services from "./Services";

export default function OurServices() {
  return (
    <>
      <NavBar />
      <Row className="container-fluid py-3 ">
        <span className="display-4 text-center text-capitalize">
          We repair a wide range of electronic devices, for a variety of issues.
        </span>
      </Row>

      <Row
        className="row-cols-2 py-3 HomeCover Cover m-0 my-5 text-light align-items-lg-baseline"
        style={{ height: "100vh" }}
      >
        <Col
          className="offset-lg-6 offset-md-5 p-5"
          style={{ fontSize: "1.1rem" }}
        >
          <h1 className="my-auto " style={{ fontSize: "5rem" }}>
            OUR
            <br /> SERVICES
          </h1>
          <br />
          <p>
            We can assure you that we have seen it all! From smartphones that
            have been run over by a car, to cellphones that have taken a dive in
            a pool, we are prepared to face anything that comes our way. Every
            IRepair technician goes through an intensive training process, and
            we maintain an environment of constant learning, so no device is too
            new, no technology too complicated.
          </p>
          <br />
          <p>
            We love people and cell phones. So, you always get the best service
            and the best price. We are locally owned and operated with master
            level techs at each location. From charging ports to glass only
            repairs to antennas and speakers, we repair the most.
          </p>
        </Col>
      </Row>
      <Services />
    </>
  );
}
