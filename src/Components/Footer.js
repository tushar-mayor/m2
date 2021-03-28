import React from "react";
import { Col, Row } from "react-bootstrap";
import { ReactComponent as Logo } from "../logo.svg";

export default function Footer() {
    return (
        <>
            <Row className="bg-dark text-light align-items-center justify-content-center p-md-0 m-0">
                <Col
                    md={6}
                    lg={3}
                    className=" row row-cols-2 m-auto p-5 p-md-2"
                >
                    <Logo />
                    <h1 className="m-auto  text-left px-4">
                        <Row>Brand Name</Row>
                    </h1>
                </Col>

                <Col
                    md={6}
                    lg={3}
                    className="d-flex align-items-center justify-content-center"
                >
                    <div>
                        <h2>Contact Us</h2>
                        <h5 className="font-weight-light font-italic">
                            Always Here To Help You
                        </h5>
                        <ul className="list-unstyled">
                            <li>Mail : ayush5151.aa@gmail.com</li>
                            <li>Phone: +919653578889</li>
                            <li>Address: Hno.612, Karol Bagh,Jalandhar </li>
                        </ul>
                    </div>
                </Col>
                <Col lg={3} className="py-5 m-auto ">
                    <Row className="justify-content-center align-items-center">
                        <h1 className="border p-3">
                            Thank Your For Choosing Us!
                        </h1>
                    </Row>
                </Col>
            </Row>
        </>
    );
}
