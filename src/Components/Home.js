import React from "react";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import NavBar from "./NavBar";
import Welcome from "./Welcome";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="HomeCover Cover">
            <NavBar page="home"/>
        <Row className="h-100 text-light font-weight-bold ">
          <Col
            lg={6}
            className="offset-md-6 d-flex justify-content-lg-center align-items-center 
                        text-center">
              <Row className="row1  text-capitalize" style={{maxWidth:"30rem"}}>
                We Take care of
                 your Phone!
                 
              </Row>
          </Col>
        </Row>
      </div>
      <br/>
            <Welcome />
        </>
    );
}
