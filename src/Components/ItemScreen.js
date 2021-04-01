import React, { useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import ContactForm from "./ContactForm";

export default function ItemScreen(props) {
    const { model } = props.match.params;
    useEffect(() => {
        document.title = model + " Service";
    }, [model]);

    return (
        <Container fluid className="  " style={{ minHeight: "90vh" }}>
            <Row className="p-5">
                <Col>
                    <h2 className="p-3 text-uppercase text-center">{model}</h2>
                    <Row
                        className="row-cols-1 row-cols-md-5  justify-content-center"
                        style={{ gap: "1rem" }}
                    >
                        <Col className="border shadow p-4 text-center">
                            Lcd Repair
                        </Col>
                        <Col className="border shadow p-4 text-center">
                            Lcd Repair
                        </Col>
                        <Col className="border shadow p-4 text-center">
                            Lcd Repair
                        </Col>
                        <Col className="border shadow p-4 text-center">
                            Lcd Repair
                        </Col>
                        <Col className="border shadow p-4 text-center">
                            Lcd Repair
                        </Col>
                        <Col className="border shadow p-4 text-center">
                            Lcd Repair
                        </Col>
                        <Col className="border shadow p-4 text-center">
                            Lcd Repair
                        </Col>
                        <Col className="border shadow p-4 text-center">
                            Lcd Repair
                        </Col>
                        <Col className="border shadow p-4 text-center">
                            Lcd Repair
                        </Col>
                        <Col className="border shadow p-4 text-center">
                            Lcd Repair
                        </Col>
                        <Col className="border shadow p-4 text-center">
                            Lcd Repair
                        </Col>
                        <Col className="border shadow p-4 text-center">
                            Lcd Repair
                        </Col>
                        <Col className="border shadow p-4 text-center">
                            Lcd Repair
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Button variant="dark mx-4">Call Us</Button>    
                        <Button variant="dark">Call Us</Button>
                    </Row>
                </Col>
                <Col md={5}>
                    <h2 className="text-center m-0 p-0">Contact Us </h2>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
}
