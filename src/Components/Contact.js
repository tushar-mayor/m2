import React from "react";
import { Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import NavBar from "./NavBar";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <NavBar page="about " />
      <Row className="m-0  justify-content-between">
        <Col lg={4} sm={12} className="p-auto m-auto">
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
        <Col lg={8} sm={12}>
          <div className="ContactCover Cover  " 
            style={{ height: "90vh" }}
          />
        </Col>
      </Row>
      <br/>
    </>
  );
}
