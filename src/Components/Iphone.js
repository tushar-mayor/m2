import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Helmet } from "react-helmet";
import NavBar from "./NavBar";

export default function Iphone() {
    function importAll(r) {
        return r.keys().map(r);
    }

    const [list, setList] = useState([]);

    const images = importAll(
        require.context("../Assests/Images/Apple", false, /\.(png|jpe?g|svg)$/)
    );

    const help = images.map((image) => {
        let url = image.default;
        let name = image.default.split("/");
        name = name[4].split(".")[0];
        return { name, url };
    });
    console.log(help);

    return (
        <>
            <Helmet>
                <title>Iphone</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <NavBar page="about " />
            <Row className="text-light  font-weight-bold m-auto TabletCover Cover ">
                <Col lg={12} className="m-auto text-center">
                    <div>
                        <div className="row1">Service as a Service</div>
                        <div>
                            We fix all smartphone models, make a diagnostic and
                            replace all non-working parts at record terms.
                        </div>
                    </div>
                </Col>
            </Row>
            <Container>
                <Row className="p-3">
                    <h1 className="">Iphone Repair</h1>
                    <h3>
                        Except standard services we offer additional ones which
                        can be made urgently
                    </h3>
                    <p className="text-muted">
                        <span className="text-dark font-weight-bold">
                            Data Recovery –
                        </span>
                        Need important data that you’re afraid of losing? We
                        provide both data back up and data recovery services, so
                        whether your hard drive is functioning or not, we can
                        retrieve important documents, photos, videos, or
                        anything else you may need. We can perform data back-up
                        and recovery on a range of memory types; from external
                        and internal hard drives, to Micro SD cards for phones,
                        memory cards for cameras, and even the newest SSD
                        drives.
                    </p>
                    <p className="text-muted">
                        <span className="text-dark font-weight-bold">
                            Unlock –
                        </span>
                        If you recently changed networks and don’t want to pay
                        for a new phone, why not have the phone network
                        unlocked? This involves opening a phone, so that it can
                        be used on all networks, making switching providers both
                        quick and painless. Prices for unlock start at $10, and
                        most models can be unlocked in a couple of hours. Use
                        our free quick estimate section to find out more about
                        getting your phone unlocked.
                    </p>
                    <p className="text-muted">
                        <span className="text-dark font-weight-bold">
                            Engineering Report –
                        </span>
                        Thankfully, even if devices can’t be repaired, there’s
                        still a solution. If you have your device insured, or
                        the device is covered under your home insurance policy,
                        you shouldn’t have to foot the bill for replacing it. We
                        can provide a full diagnostics of any device, and
                        prepare an engineering report on the exact fault, or
                        faults, do that you can have a qualified electronic
                        engineer to back you up.
                    </p>
                    <ul className="text-muted ">
                        <span className="font-weight-bold">
                            Engineering Reports can be used for:
                        </span>
                        <li className="p-1">Resale of Electronic Items</li>
                        <li className="p-1">Insurance Purposes.</li>
                        <li className="p-1">Value Appraisal</li>
                        <li className="p-1">Legal Reasons.</li>
                        <li className="p-1">3rd Party Opinion</li>
                    </ul>
                </Row>

                <Row className="p-2 row-cols-1 row-cols-md-4">
                    {help.map((image) => (
                        <Card style={{ width: "18rem" }} className="shadow">
                            <Card.Img variant="top" src={image.url} />
                            <Card.Title className="text-center">{image.name}</Card.Title>
                        </Card>
                    ))}
                </Row>
            </Container>
        </>
    );
}
