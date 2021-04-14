import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ReactComponent as Android } from "../Android.svg";
import { ReactComponent as Iphone } from "../Apple.svg";
import { ReactComponent as Vape } from "../Vape.svg";
import Slide from "react-reveal/Slide";
export default function Services() {
    return (
        <Container fluid className="my-3 py-3">
            <Row className="row-cols-md-3 row-cols-1 justify-content-around m-0">
                <Col>
                    <Slide left fraction={0.1}>
                        <NavLink
                            to="/Android"
                            className=" text-decoration-none text-dark"
                        >
                            <Row className="Services">
                                <Col className="bg-light ">
                                    <Android />
                                </Col>
                                <Col lg={8}>
                                    <h4>Android Repair</h4>
                                    <p className="text-muted">
                                        We fix all smartphone models, make a
                                        diagnostic and replace all non-working
                                        parts at record terms.
                                    </p>
                                </Col>
                            </Row>
                        </NavLink>
                    </Slide>
                </Col>
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
                                    <h4>Iphone Repair</h4>
                                    <p className="text-muted">
                                        We fix all smartphone models, make a
                                        diagnostic and replace all non-working
                                        parts at record terms.
                                    </p>
                                </Col>
                            </Row>
                        </NavLink>
                    </Slide>
                </Col>
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
                                        diagnostic and replace all non-working
                                        parts at record terms.
                                    </p>
                                </Col>
                            </Row>
                        </NavLink>
                    </Slide>
                </Col>
            </Row>
        </Container>
    );
}
