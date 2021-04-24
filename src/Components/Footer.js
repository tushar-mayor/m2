import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Footer() {
    return (
        <>
            <Row className="bg-dark text-light  m-0 justify-content-around align-items-center p-3">
                <Col md={6} lg={4} className="text-center p-1 text-uppercase  ">
                    <h1 style={{ fontWeight: "bolder" }}>
                        Phone Repair plus and Vapes
                    </h1>
                </Col>
                <Col
                    md={6}
                    lg={4}
                    className="text-center text-uppercase"
                    style={{ fontWeight: "bolder" }}
                >
                    <div style={{fontWeight:"bolder"}}>
                        <h1>Contact Us</h1>
                        <h5 className="font-italic">Always Here To Help You</h5>
                        <ul className="list-unstyled text-capitalize " style={{fontSize:"1.3rem"}}>
                            <li>Phone: 01789507470, 07848372777</li>
                            <li>
                                Address: 31 henley street, stratford-upon-avon,
                                CV37 6QW{" "}
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col lg={4}>
                    <Row>
                        <h1
                            className="border p-3 text-uppercase text-center"
                            style={{ fontWeight: "bolder" }}
                        >
                            Thank Your For Choosing Us!
                        </h1>
                    </Row>
                </Col>
            </Row>
        </>
    );
}
