import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Services from "./Services";

export default function OurServices() {
    useEffect(() => {
        document.title = "Services";
    }, []);
    return (
        <Fade bottom duration={2000}>
            <Row
                className="container-fluid py-3 text-center  justify-content-center text-capitalize"
                style={{ fontSize: "3rem" }}
            >
                We repair a wide range of electronic devices, for a variety of
                issues.
            </Row>

            <Row
                className="ServiceCover Cover m-0  text-light "
                style={{ height: "100vh" }}
            >
                <Col
                    sm={12}
                    lg={6}
                    className="offset-lg-6 my-auto"
                    style={{ fontSize: "1.1rem" }}
                >
                    <div className="m-auto ">
                        <h1 style={{ fontWeight: "bolder" }}>OUR SERVICES</h1>
                        <br />
                        <p style={{ fontWeight: "bolder" }}>
                            We can assure you that we have seen it all! From
                            smartphones that have been run over by a car, to
                            cellphones that have taken a dive in a pool, we are
                            prepared to face anything that comes our way. Our
                            technicians goes through an intensive training
                            process, and we maintain an environment of constant
                            learning, so no device is too new, no technology too
                            complicated.
                        </p>
                        <br />
                        <p style={{ fontWeight: "bolder" }}>
                            We love people and cell phones. So, you always get
                            the best service and the best price.From charging
                            ports to screen only repairs to antennas and
                            speakers, we repair the most.
                        </p>
                    </div>
                </Col>
            </Row>
            <br />
            <Services />
        </Fade>
    );
}
