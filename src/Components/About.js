import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import NavBar from "./NavBar";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <NavBar page="about " />

      <Container>
        <Row className="py-5">
          <h1 className="display-3 w-100 text-center  pb-3 font-weight-bold">
            About Us
          </h1>
          <p className="lead">
            Here, at Brand Name, we provide repair solutions to customers that
            are looking for high quality services with competitive prices. We
            have highly qualified repair technicians and engineers that are here
            to provide help to anyone looking for the highest standard of
            repairs, from value devices to the higher end electronics.
          </p>
          <p className="lead">
            We let our work speak for itself. Since January 2010, we’ve repaired
            over 25,000 devices, with a repair rate of 93.80%. We are currently
            seeing a yearly increase of between 20% to 30% repaired devices.
          </p>
          <p className="lead">
            A lot of this growth is due to the system we use to repair devices
            nationwide. At the moment, this means over 200 happy customers per
            week, and we would love if you were number 201.
          </p>
        </Row>
      </Container>
      <Container fluid>
        <Row className=" p-3 bg-dark">
          <Col lg={6} className="m-0 p-0 px-md-3">
            <div className=" AboutCover Cover " />
          </Col>
          <Col lg={6} className="  justify-content-center p-5 text-light">
            <h1 className="text-uppercase font-weight-bold ">Core Value:</h1>
            <ol className="valueList text-white-50 p-0 m-3">
              <li>
                Our experienced and qualified engineers have combined experience
                in this industry of over 30 years.
              </li>
              <li>
                We doubled our warranty to 6 months, so we stand over our own
                work. Always.
              </li>
              <li>
                Our No Fix/ No Fee policy means we don’t charge you if we can’t
                fix your device. Risk free.
              </li>
              <li>
                Our ‘No jargon’ communication with all of our customers, we
                don’t want anything to go over your head.
              </li>
              <li>
                Our repair tracker means that you can always keep an eye on the
                status of your repair, and you will always have access to the
                most up to date information, and your repair history.
              </li>
            </ol>
          </Col>
        </Row>
      </Container>
      <br />
    </>
  );
}