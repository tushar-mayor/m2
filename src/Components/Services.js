import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ReactComponent as Android } from "../Android.svg";
import { ReactComponent as Iphone } from "../Apple.svg";
import { ReactComponent as Vape } from "../Vape.svg";
import { ReactComponent as Tablet } from "../Tablet.svg";
import Slide from "react-reveal/Slide";
export default function Services() {
    return (
        <Container className="my-3 py-3">
            <Row
                className="row-cols-md-2 row-cols-1 justify-content-around  m-0"
                style={{ gap: "20px 0" }}
            >
                <Col>
                    <Col>
                        <Slide left fraction={0.1}>
                            <NavLink
                                to="/Android"
                                className=" text-decoration-none text-dark"
                            >
                                <Row className="Services ">
                                    <Col className="bg-light ">
                                        <Android />
                                    </Col>
                                    <Col lg={8}>
                                        <h4>Android Repair</h4>
                                        <p className="text-muted">
                                            We fix all smartphone models, make a
                                            diagnostic and replace all
                                            non-working parts at record terms.
                                        </p>
                                    </Col>
                                </Row>
                            </NavLink>
                        </Slide>
                    </Col>
                </Col>
                <Col>
                    <Col>
                        <Slide bottom fraction={0.1}>
                            <NavLink
                                to="/Iphone"
                                className=" text-decoration-none text-dark"
                            >
                                <Row className="Services">
                                    <Col className="bg-light ">
                                        <Iphone />
                                    </Col>
                                    <Col lg={8}>
                                        <h4>iPhone Repair</h4>
                                        <p className="text-muted">
                                            We fix all smartphone models, make a
                                            diagnostic and replace all
                                            non-working parts at record terms.
                                        </p>
                                    </Col>
                                </Row>
                            </NavLink>
                        </Slide>
                    </Col>
                </Col>
                <Col>
                    <Col>
                        <Slide right fraction={0.1}>
                            <NavLink
                                to="/Vape"
                                className=" text-decoration-none text-dark"
                            >
                                <Row className="Services">
                                    <Col className="bg-light ">
                                        <Vape />
                                    </Col>
                                    <Col lg={8}>
                                        <h4>Vape Services</h4>
                                        <p className="text-muted">
                                            We fix all smartphone models, make a
                                            diagnostic and replace all
                                            non-working parts at record terms.
                                        </p>
                                    </Col>
                                </Row>
                            </NavLink>
                        </Slide>
                    </Col>
                </Col>
                <Col>
                    <Col>
                        <Slide Bottom fraction={0.1}>
                            <NavLink
                                to="/Ipad"
                                className=" text-decoration-none text-dark"
                            >
                                <Row className="Services">
                                    <Col className="bg-light ">
                                        <Tablet />
                                    </Col>
                                    <Col lg={8}>
                                        <h4>iPad Repair</h4>
                                        <p className="text-muted">
                                            We fix all smartphone models, make a
                                            diagnostic and replace all
                                            non-working parts at record terms.
                                        </p>
                                    </Col>
                                </Row>
                            </NavLink>
                        </Slide>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}
