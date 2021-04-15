import React, { useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import ContactForm from "./ContactForm";

export default function ItemScreen(props) {
    const { Model } = props.match.params;
    useEffect(() => {
        document.title = Model + " Service";
    }, [Model]);

    const services = [
        "Screen Repair (LCD & Glass)",
        "Battery Replacement",
        "Charging Port Repair",
        "Water /Liquid Damage Repair",
        "Full Diagnostics Service",
        "Power Button Repair",
        "Vibration Repair",
        "Earpiece repair",
        "MicroPhone Repair",
        "Loud Speaker Repair",
        "Camera Reapir",
        "Software Fix",
        "Mobile Unlocking",
    ];

    return (
        <Container fluid style={{ minHeight: "90vh" }}>
            <Row className="p-5">
                <Col md={8}>
                    <h2 className="text-uppercase ">{Model} Services</h2>
                    <Row className="p-3" style={{ gap: "1rem 0rem" }}>
                        {services.map((service) => (
                            <Col
                                md={3}
                                className="  d-flex justify-content-center  p-1"
                                style={{ height: "7rem" }}
                            >
                                <Col
                                    sm={12}
                                    className=" h-100 d-flex align-items-center text-center justify-content-center border shadow "
                                >
                                    {service}
                                </Col>
                            </Col>
                        ))}
                    </Row>
                    <Row className="my-3">
                            <Button variant="dark mx-5" >Call Us</Button>
                            <Button variant="dark">Call Us</Button>
                    </Row>
                </Col>
                <Col md={4}>
                    <h2 className="text-center m-0 p-0">Contact Us </h2>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
}
