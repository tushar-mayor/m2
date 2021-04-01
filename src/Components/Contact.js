import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import ContactForm from "./ContactForm";

export default function Contact() {
    useEffect(() => {
        document.title = "Contact";
    }, []);
    return (
        <>
            <Row className="m-0 p-2  justify-content-between">
                <Col lg={4} sm={12} className="m-auto ">
                    <h1>Contact</h1>
                    <h5>
                        Phone: <span>0178507470, 07848372777</span>
                    </h5>
                    <h5>
                        Address:{" "}
                        <span className="text-capitalize">
                            {" "}
                            31 henley street,stratford-upon-avon,CV31 6QW
                        </span>
                    </h5>
                </Col>
                <Col lg={7} sm={12}>
                    <ContactForm />
                </Col>
            </Row>
            <br />
        </>
    );
}
