import React from "react";
import { Col, Row } from "react-bootstrap";
import Services from "./Services";
import { Slide } from "react-reveal";
export default function Welcome() {
    return (
        <>
            <Row className="p-3 mx-0 ">
                <Services />

                <Col lg={6} md={12} className=" p-3">
                    <Row>
                        <Col lg={7} className="offset-lg-5">
                            <Slide left fraction={1}>
                                <h3> Welcome To</h3>
                                <h1
                                    className="font-weight-bold "
                                    style={{ fontSize: "2.4rem" }}
                                >
                                    Phone Repair Plus And Vapes
                                </h1>
                                <h5 className="text-black-50">
                                    We Fix Everything!
                                </h5>
                                <p>
                                    We can assure you that we have seen it all!
                                    From smartphones that have been run over by
                                    a car, to cellphones that have taken a dive
                                    in a pool, we are prepared to face anything
                                    that comes our way. Every IRepair technician
                                    goes through an intensive training process,
                                    and we maintain an environment of constant
                                    learning, so no device is too new, no
                                    technology too complicated. We love people
                                    and cell phones. So, you always get the best
                                    service and the best price. We are locally
                                    owned and operated with master level techs
                                    at each location. From charging ports to
                                    glass only repairs to antennas and speakers,
                                    we repair the most.
                                </p>
                            </Slide>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} md={12} style={{ minHeight: "60vh" }}>
                    <Slide right duration={1500} fraction={0.7}>
                        <div className="welcomeImg" />
                    </Slide>
                </Col>
            </Row>
            <Row className="p-0 m-0 p-md-3 " style={{ minHeight: "90vh" }}>
                <Col lg={6} className="p-5">
                    <Slide left duration={1500} fraction={1}>
                        <div className="welcomeImg1"></div>
                    </Slide>
                </Col>
                <Col lg={6}>
                    <Row className=" align-items-center h-100 justify-content-center p-3">
                        <Col lg={12}>
                            <Slide right fraction={1}>
                                <h1 className="font-weight-bolder ">
                                    Why Choose Us.?
                                </h1>
                                <div>
                                    <h2>Customer Support</h2>
                                    <p className="text-muted ">
                                        we have 24/7 customer support so you
                                        could ask any question and book an
                                        appointment with our expert.
                                    </p>
                                    <h2>Low Price Guarantee</h2>
                                    <p className="text-muted ">
                                        we provide our clients with fair prices
                                        so everyone could afford a cellphone
                                        repair.
                                    </p>
                                    <h2>Trained Manpower </h2>
                                    <p className="text-muted ">
                                        All our techinicians undergo in depth
                                        training at our centralised training
                                        facility.
                                    </p>
                                </div>
                            </Slide>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br />

            <br />
        </>
    );
}
