import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ReactComponent as Android } from "../Android.svg";
import { ReactComponent as Iphone } from "../Apple.svg";
import { ReactComponent as Vape } from "../Vape.svg";
import { ReactComponent as Tablet } from "../Tablet.svg";
import { ReactComponent as Macbook } from "../Macbook.svg";
import Slide from "react-reveal/Slide";
export default function Services() {
    return (
        <Container fluid className="my-3 py-3">
            <Row
                className="row-cols-md-3 row-cols-1 justify-content-around  m-0 yoieee"
                style={{ gap: "20px 0" }}
            >
                <Col>
                    <Col>
                        <Slide left fraction={0.4}>
                            <NavLink
                                to="/Android"
                                className=" text-decoration-none text-dark"
                            >
                                <Row className="Services ">
                                    <Col>
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
                    <Col className="d-flex align-items-center">
                        <Slide top fraction={0.4}>
                            <NavLink
                                to="/Iphone"
                                className=" text-decoration-none  text-dark"
                            >
                                <Row className="Services  py-2">
                                    <Col>
                                        <Iphone />
                                    </Col>
                                    <Col lg={8}>
                                        <h4>iPhone Repair</h4>
                                        <p className="text-muted">
                                            We fix most Iphone models, make a
                                            diagnostic and replace all
                                            non-working parts.
                                        </p>
                                    </Col>
                                </Row>
                            </NavLink>
                        </Slide>
                    </Col>
                </Col>
                <Col>
                    <Col className="d-flex align-items-center">
                        <Slide right fraction={0.4}>
                            <NavLink
                                to="/Iphone"
                                className=" text-decoration-none  text-dark"
                            >
                                <Row className="Services  py-2">
                                    <Col>
                                        <Tablet />
                                    </Col>
                                    <Col lg={8}>
                                        <h4>iPad Repair</h4>
                                        <p className="text-muted">
                                            We fix Ipad models, make a
                                            diagnostic and fix all non-working
                                            parts.
                                        </p>
                                    </Col>
                                </Row>
                            </NavLink>
                        </Slide>
                    </Col>
                </Col>
                <Col>
                    <Col className="d-flex align-items-center">
                        <Slide left fraction={0.4}>
                            <NavLink
                                to="/Iphone"
                                className=" text-decoration-none  text-dark"
                            >
                                <Row className="Services  py-2">
                                    <Col>
                                        <Macbook />
                                    </Col>
                                    <Col lg={8}>
                                        <h4>Macbook Repair</h4>
                                        <p className="text-muted">
                                            We fix Macbook models, make a
                                            diagnostic and fix all the problem
                                            occuring.
                                        </p>
                                    </Col>
                                </Row>
                            </NavLink>
                        </Slide>
                    </Col>
                </Col>
                <Col>
                    <Col className="d-flex align-items-center">
                        <Slide right fraction={0.4}>
                            <NavLink
                                to="/Iphone"
                                className=" text-decoration-none  text-dark"
                            >
                                <Row className="Services  py-2">
                                    <Col>
                                        <Vape />
                                    </Col>
                                    <Col lg={8}>
                                        <h4>Vape Services</h4>
                                        <p className="text-muted">
                                            We sell and repair diffrent type of
                                            vapes and accessories
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
