import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Slide, Fade } from "react-reveal";

export default function About() {
    useEffect(() => {
        document.title = "About";
    }, []);
    return (
        <>
            <Container>
                <Row className="m-0 justify-content-center">
                    <Fade top cascade duration={1300}>
                        <h1 className="display-3 w-100 text-center  font-weight-bold">
                            About Us
                        </h1>
                        <p className="lead">
                            Here, at Phone Repair Plus and Vapes, we provide
                            repair solutions to customers that are looking f~or
                            high quality services with competitive prices. We
                            have highly qualified repair technicians and
                            engineers that are here to provide help to anyone
                            looking for the highest standard of repairs, from
                            value devices to the higher end electronics.
                        </p>
                        <p className="lead">
                            A lot of this growth is due to the system we use to
                            repair devices nationwide. At the moment, this means
                            over 200 happy customers per week, and we would love
                            if you were number 201.
                        </p>
                    </Fade>
                </Row>
            </Container>
            <Container fluid className="my-5">
                <Fade delay={1300}>
                    <Row className=" p-3 bg-dark">
                        <Col lg={6} className="m-0 p-0 px-md-3">
                            <Slide left delay={1400}>
                                <div className=" AboutCover Cover " />
                            </Slide>
                        </Col>
                        <Col
                            lg={6}
                            className="  justify-content-center p-5 py-5 text-light"
                        >
                            <Slide right cascade delay={1400}>
                                <h1 className="text-uppercase font-weight-bold ">
                                    Core Value:
                                </h1>
                                <ol className="valueList text-white-50 p-0 m-3">
                                    <li>
                                        Our No Fix/ No Fee policy means we don’t
                                        charge you if we can’t fix your device.
                                        Risk free.
                                    </li>
                                    <li>
                                        Our ‘No jargon’ communication with all
                                        of our customers, we don’t want anything
                                        to go over your head.
                                    </li>
                                    <li>
                                        Our repair tracker means that you can
                                        always keep an eye on the status of your
                                        repair, and you will always have access
                                        to the most up to date information, and
                                        your repair history.
                                    </li>
                                </ol>
                            </Slide>
                        </Col>
                    </Row>
                </Fade>
            </Container>
            <br />
        </>
    );
}
