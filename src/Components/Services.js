import React from "react";
import { Col, Row } from "react-bootstrap";
import { ReactComponent as Phone } from "../SmartPhone.svg";
import { ReactComponent as Tablet } from "../Tablet.svg";
import { ReactComponent as Computer } from "../Computer.svg";
import { ReactComponent as Laptop } from "../Laptop.svg";
import { ReactComponent as Console } from "../Console.svg";
import { ReactComponent as Electronix } from "../Electronix.svg";
import { NavLink } from "react-router-dom";

export default function Services() {
    return (
        <>
            <Row className="row-cols-md-3 row-cols-1 m-0 "  >
                <Col >
                    <NavLink
                        to="/SmartPhone"
                        className=" text-decoration-none text-dark" 
                    >
                        <Row className="Services">
                            <Col >
                                <Phone fill="#33606e" />
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
                        to="/Tablet"
                        className=" text-decoration-none text-dark"
                    >
                        <Row className="Services">
                            <Col >
                                <Tablet fill="#33606e" />
                            </Col>
                            <Col lg={8}>
                                <h4>Tablet Repair</h4>
                                <p className="text-muted">
                                    We aim to take the hassle out of tablet
                                    repairs, and soften the blow of having a
                                    damaged or defective tablet.
                                </p>
                            </Col>
                        </Row>
                    </NavLink>
                </Col>
                <Col>
                    <NavLink
                        to="/Computer"
                        className=" text-decoration-none text-dark"
                    >
                        <Row className="Services">
                            <Col >
                                <Computer fill="#33606e" />
                            </Col>
                            <Col lg={8}>
                                <h4>Computer Repair</h4>
                                <p className="text-muted">
                                    Computer not powering on? Sometimes, if this
                                    occurs, the issue is with the main board of
                                    your computer.
                                </p>
                            </Col>
                        </Row>
                    </NavLink>
                </Col>
                <Col>
                    <NavLink
                        to="/Laptop"
                        className=" text-decoration-none text-dark"
                    >
                        <Row className="Services">
                            <Col >
                                <Laptop fill="#33606e" />
                            </Col>
                            <Col lg={8}>
                                <h4>Laptop Repair</h4>
                                <p className="text-muted">
                                    Drop your laptop? On all laptops that have
                                    been physically damaged, the screen is one
                                    of the most fragile components.
                                </p>
                            </Col>
                        </Row>
                    </NavLink>
                </Col>
                <Col >
                    <NavLink
                        to="/Console"
                        className=" text-decoration-none text-dark"
                    >
                        <Row className="Services h-100">
                            <Col className="p-5 p-md-2">
                                <Console fill="#33606e" />
                            </Col>
                            <Col lg={8}>
                                <h4>Console Repair</h4>
                                <p className="text-muted">
                                    If your Playstation isn't accepting discs,
                                    or one is trapped inside, then we can either
                                    repair or replace the entire disc drive
                                    unit.
                                </p>
                            </Col>
                        </Row>
                    </NavLink>
                </Col>
                <Col>
                    <NavLink
                        to="/Electronics"
                        className=" text-decoration-none text-dark"
                    >
                        <Row className=" Services flex-md-column flex-lg-row">
                            <Col >
                                <Electronix fill="#33606e" />
                            </Col>
                            <Col lg={8}>
                                <h4>Electronics Repair Repair</h4>
                                <p className="text-muted">
                                    We also specialize in a variety of
                                    electronic gadgets. We challenge to fix any
                                    electronic device.
                                </p>
                            </Col>
                        </Row>
                    </NavLink>
                </Col>
            </Row>
        </>
    );
}
