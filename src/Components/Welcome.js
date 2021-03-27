import React from "react";
import { Col, Row } from "react-bootstrap";
import Services from "./Services";

export default function Welcome() {
  return (
    <>
      <Row>
        <Col lg={6}>
          <Row className=" p-5">
            <Col lg={6} className="offset-lg-6">
              <h3>Welcome To</h3>
              <h1 className="font-weight-bold">Brand Name</h1>
              <h5 className="text-black-50">We Fix Everything!</h5>
              <p>
                We can assure you that we have seen it all! From smartphones
                that have been run over by a car, to cellphones that have taken
                a dive in a pool, we are prepared to face anything that comes
                our way. Every IRepair technician goes through an intensive
                training process, and we maintain an environment of constant
                learning, so no device is too new, no technology too
                complicated. We love people and cell phones. So, you always get
                the best service and the best price. We are locally owned and
                operated with master level techs at each location. From charging
                ports to glass only repairs to antennas and speakers, we repair
                the most.
              </p>
            </Col>
          </Row>
        </Col>
        <Col lg={6} className="p-5">
          <div className="welcomeImg " />
        </Col>
      </Row>
      <Row>
        <Col lg={6} className="p-5">
          <div className="welcomeImg1"></div>
        </Col>
        <Col lg={6}>
          <Row className="align-items-center justify-content-end ">
            <Col lg={12} className=" p-5">
              <h1 className="font-weight-bolder ">Why Choose Us.?</h1>
              <div className="px-lg-3 ">
                <div>
                  <h2>Quality Guarantee</h2>
                  <p className="text-muted px-3">
                    we provide our clients with a six months warranty because we
                    are confident in our quality.
                  </p>
                </div>
                <div>
                  <h2>Customer Support</h2>
                  <p className="text-muted px-3">
                    we have 24/7 customer support so you could ask any question
                    and book an appointment with our expert.
                  </p>
                </div>
                <div>
                  <h2>Low Price Guarantee</h2>
                  <p className="text-muted px-3">
                    we provide our clients with fair prices so everyone could
                    afford a cellphone repair.
                  </p>
                </div>
                <div>
                  <h2>Trained Manpower </h2>
                  <p className="text-muted px-3">
                    All our techinicians undergo in depth training at our
                    centralised training facility.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <br />
      <Services />
    </>
  );
}
