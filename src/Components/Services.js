import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {ReactComponent as SmartPhoneSvg} from '../Smartphone.svg'
import {ReactComponent as Iphone} from '../Apple.svg'
import {ReactComponent as Android} from '../Android.svg'
export default function Services() {
    return (
        <Container fluid>
            <Row className="row-cols-md-3 row-cols-1 justify-content-around m-0">
                <Col>
                    <NavLink
                        to="/SmartPhone"
                        className=" text-decoration-none text-dark"
                    >
                        <Row className="Services">
                            <Col className="bg-light ">
                               
                                <SmartPhoneSvg/>
                            </Col>
                            <Col lg={8}>
                                <h4>SmartPhone Repair</h4>
                                <p className="text-muted">
                                    We fix all smartphone models, make a
                                    diagnostic and replace all non-working parts
                                    at record terms.
                                </p>
                            </Col>
                        </Row>
                    </NavLink>
                </Col>
                <Col>
                    <NavLink
                        to="/Iphone"
                        className=" text-decoration-none text-dark"
                    >
                        <Row className="Services">
                            <Col className="bg-light ">
                              <Iphone/>
                            </Col>
                            <Col lg={8}>
                                <h4>Iphone Repair</h4>
                                <p className="text-muted">
                                    We fix all smartphone models, make a
                                    diagnostic and replace all non-working parts
                                    at record terms.
                                </p>
                            </Col>
                        </Row>
                    </NavLink>
                </Col>
                <Col>
                    <NavLink
                        to="/SmartPhone"
                        className=" text-decoration-none text-dark"
                    >
                        <Row className="Services">
                            <Col className="bg-light ">
                                <Android/>
                            </Col>
                            <Col lg={8}>
                                <h4>Android Repair</h4>
                                <p className="text-muted">
                                    We fix all smartphone models, make a
                                    diagnostic and replace all non-working parts
                                    at record terms.
                                </p>
                            </Col>
                        </Row>
                    </NavLink>
                </Col>
            </Row>
        </Container>
    );
}
