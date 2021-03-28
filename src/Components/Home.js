import React from "react";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import NavBar from "./NavBar";
import Welcome from "./Welcome";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
                    <NavBar page="home" />
            <div className="HomeCover Cover ">
                <Row className="text-light  font-weight-bold m-auto h-full">
                    <Col lg={6} className=" offset-lg-6 my-auto">
                        <Row
                            className="row1  text-center m-auto text-capitalize"
                            style={{ maxWidth: "30rem" }}
                        >
                            We Take care of your Phone!
                        </Row>
                    </Col>
                </Row>
            </div>
            <br />
            <Welcome />
        </>
    );
}
