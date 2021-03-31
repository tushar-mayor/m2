import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { Helmet } from "react-helmet";
import NavBar from "./NavBar";

export default function Vape() {
    return (
        <>
            <Helmet>
                <title>Vape Services</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <NavBar page="about " />
            <Row className="text-light  font-weight-bold m-auto TabletCover Cover ">
                <Col lg={12} className="m-auto text-center text-dark">
                    <div>
                        <div className="row1">Service as a Service</div>
                        <div>
                            We provide quick service process at our mobile
                            Store. Our service included touch screen
                            repair/replacement, liquid and water damage repair,
                            broken and physical damage repair, mainboard
                            chip-level repairing, charging port, power button,
                            side button, camera repair, headphone jack, wifi,
                            bluetooth, battery replacement, software
                            troubleshoot and up-gradation.
                        </div>
                    </div>
                </Col>
            </Row>
            <Container>
                <Row className="p-3 text-muted">
                    <h1 className="text-dark">Vape Services</h1>
                    <p>
                        <span className="text-dark font-weight-bold">
                            Sale –
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
                    <p>
                        <span className="text-dark font-weight-bold">
                            Battery Replacement –
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
                    <p>
                        <span className="text-dark font-weight-bold">
                            Smoke Intersifier -
                        </span>
                        Smartphone screens are brittle, and it's only a matter
                        of time before you need your screen fixed - Our
                        technicians have expertly repaired millions of screens
                        over the years. There's literally not a problem we
                        hasn't seen and solved. Our professionally trained and
                        vetted Technicians are experts and will meet you and
                        provide smartphone Repair- at your home, office or
                        anywhere whichever is convenient for you.{" "}
                    </p>
                    <p>
                        <span className="text-dark font-weight-bold">
                            Chamber Cleaning-
                        </span>
                        Water damaged motherboard, or display demands expert
                        intervention! Get your smartphone repaired at best
                        market price with up to 6 months warranty.
                    </p>
                    <p>
                        <span className="text-dark font-weight-bold">
                            Filter Change –
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
                </Row>

                
            </Container>
        </>
    );
}
