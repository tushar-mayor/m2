import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import Services from "./Services";

export default function OurServices() {
  useEffect(() => {
    document.title = "Services";
  }, []);
  return (
    <>
      <Row className="container-fluid py-3 ">
        <span className="display-4 text-center text-capitalize">
          We repair a wide range of electronic devices, for a variety of issues.
        </span>
      </Row>

      <Row
        className="ServiceCover Cover m-0  text-light "
        style={{ height: "100vh" }}
      >
        <Col
          sm={12}
          lg={6}
          className="offset-lg-6  my-auto"
          style={{ fontSize: "1.1rem" }}
        >
          <div className="m-auto ">
            <h1>OUR SERVICES</h1>
            <br />
            <p>
              We can assure you that we have seen it all! From smartphones that
              have been run over by a car, to cellphones that have taken a dive
              in a pool, we are prepared to face anything that comes our way.
              Every IRepair technician goes through an intensive training
              process, and we maintain an environment of constant learning, so
              no device is too new, no technology too complicated.
            </p>
            <br />
            <p>
              We love people and cell phones. So, you always get the best
              service and the best price. We are locally owned and operated with
              master level techs at each location. From charging ports to glass
              only repairs to antennas and speakers, we repair the most.
            </p>
          </div>
        </Col>
      </Row>
      <br />
      <Services />
    </>
  );
}
