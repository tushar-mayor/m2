import React from "react";
import { Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";

export default function Contact() {
  return (
    <>
      <NavBar page="about " />
      <Row className="h-100 align-items-center justify-content-center">
        <Col lg={3} className="mx-lg-3 ">
          <h1>Contact</h1>
          <h5>
            Phone:
            <span>+919653578889</span>
          </h5>
          <h5>
            Email:
            <span>ayush.aa@gmail.com</span>
          </h5>
          <h5>
            Address:
            <span>Hno. 612,Karol Bagh ,Jalandhar</span>
          </h5>
        </Col>
        <Col lg={8} className="row align-items-lg-center h-100">
          <div className="ContactCover bg-dark h-75 w-100 mw-100" />
        </Col>
      </Row>
    </>
  );
}
