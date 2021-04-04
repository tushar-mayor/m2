import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Fade, Zoom, LightSpeed } from "react-reveal";
import Welcome from "./Welcome";

export default function Home() {
    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <>
            <Fade duration={3000}>
                <div className="HomeCover Cover ">
                    <Row className="text-light  font-weight-bold m-auto h-full">
                        <Col lg={6} className=" offset-lg-6 my-auto">
                            <Row
                                className="row1  text-center m-auto "
                                style={{ maxWidth: "14ch", }}
                            >
                            <div className="welcomeTxt">

                                <Zoom
                                    right
                                    cascade
                                    duration={1000}
                                    delay={2000}
                                >
                                    We take care of Your Phone!
                                </Zoom>
                            </div>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Fade>
            <br />
                <Welcome />
        </>
    );
}
