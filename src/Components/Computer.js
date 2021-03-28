import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import NavBar from "./NavBar";

export default function Computer() {
  return (
    <>
      <Helmet>
        <title>Computer</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <NavBar page="about " />
      <div className="ComputerCover h-75">
        <Row className="h-100 p-5 text-light font-weight-bold ">
          <Col
            lg={12}
            className="d-flex justify-content-lg-center align-items-center 
                        text-center"
          >
            <div>
              <Row className="row1 d-flex justify-content-center">
                Service as a Service
              </Row>
              <Row className="">
                We fix all smartphone models, make a diagnostic and replace all
                non-working parts at record terms.
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <Container>
        <Row className="py-3">
          <h1 className="">Computer Repair</h1>
          <h3>
            Except standard services we offer additional ones which can be made
            urgently
          </h3>
        </Row>
        <Row className="py-1    ">
          <p className="text-muted">
            <span className="text-dark font-weight-bold">Data Recovery –</span>
            Need important data that you’re afraid of losing? We provide both
            data back up and data recovery services, so whether your hard drive
            is functioning or not, we can retrieve important documents, photos,
            videos, or anything else you may need. We can perform data back-up
            and recovery on a range of memory types; from external and internal
            hard drives, to Micro SD cards for phones, memory cards for cameras,
            and even the newest SSD drives.
          </p>
        </Row>
        <Row className="py-1    ">
          <p className="text-muted">
            <span className="text-dark font-weight-bold">Unlock –</span>
            If you recently changed networks and don’t want to pay for a new
            phone, why not have the phone network unlocked? This involves
            opening a phone, so that it can be used on all networks, making
            switching providers both quick and painless. Prices for unlock start
            at $10, and most models can be unlocked in a couple of hours. Use
            our free quick estimate section to find out more about getting your
            phone unlocked.
          </p>
        </Row>
        <Row className="py-1    ">
          <p className="text-muted">
            <span className="text-dark font-weight-bold">
              Engineering Report –
            </span>
            Thankfully, even if devices can’t be repaired, there’s still a
            solution. If you have your device insured, or the device is covered
            under your home insurance policy, you shouldn’t have to foot the
            bill for replacing it. We can provide a full diagnostics of any
            device, and prepare an engineering report on the exact fault, or
            faults, do that you can have a qualified electronic engineer to back
            you up.
          </p>
        </Row>
        <Row>
          <ul className="text-muted ">
            <span className="font-weight-bold">
              Engineering Reports can be used for:
            </span>
            <li className="p-1">Resale of Electronic Items</li>
            <li className="p-1">Insurance Purposes.</li>
            <li className="p-1">Value Appraisal</li>
            <li className="p-1">Legal Reasons.</li>
            <li className="p-1">3rd Party Opinion</li>
          </ul>
        </Row>
      </Container>
    </>
  );
}
