import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import iPhone6Plus from "../Assests/Images/Apple/iPhone 6 Plus.jpg";
import iPhone6sPlus from "../Assests/Images/Apple/iPhone 6s Plus.jpg";
import iPhone7 from "../Assests/Images/Apple/iPhone 7.jpg";
import iPhone7Plus from "../Assests/Images/Apple/iPhone 7 plus.jpg";
import iPhone8 from "../Assests/Images/Apple/iPhone 8.webp";
import iPhone8Plus from "../Assests/Images/Apple/iPhone 8+.webp";
import IphoneX from "../Assests/Images/Apple/iPhone X.webp";
import IphoneXR from "../Assests/Images/Apple/iPhone XR.jpg";
import IphoneXS from "../Assests/Images/Apple/iPhone XS.webp";
import IphoneXSMax from "../Assests/Images/Apple/iPhone XS Max.webp";
import Iphone11 from "../Assests/Images/Apple/iPhone 11.jpg";
import Iphone11Pro from "../Assests/Images/Apple/iPhone 11 Pro.jpg";
import Iphone11ProMax from "../Assests/Images/Apple/iPhone 11 Pro Max.jpg";
import Iphone12 from "../Assests/Images/Apple/iPhone 12.jpg";
import Iphone12Mini from "../Assests/Images/Apple/iPhone 12 Mini.jpg";
import Iphone12Pro from "../Assests/Images/Apple/iPhone 12 Pro.jpg";
import Iphone12ProMax from "../Assests/Images/Apple/iPhone 12 Pro Max.jpg";
import IphoneSE from "../Assests/Images/Apple/iPhone SE 2020.jpg";
export default function IPhoneModels() {
    return (
        <>
            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/Iphone 6 Plus`}
                >
                    <Card className="p-1">
                        <Card.Img
                            variant="top"
                            src={iPhone6Plus}
                            style={{
                                maxHeight: "40vh",
                                minHeight: "200px",
                                maxWidth: "70%",
                                margin: "0 auto",
                            }}
                        />
                        <Card.Title>Iphone 6 Plus</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/Iphone 6s Plus`}
                >
                    <Card className="p-1">
                        <Card.Img
                            variant="top"
                            src={iPhone6sPlus}
                            style={{
                                maxHeight: "40vh",
                                minHeight: "200px",
                                maxWidth: "70%",
                                margin:"0 auto"
                            }}
                        />
                        <Card.Title>Iphone 6s Plus</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/Iphone 7`}
                >
                    <Card className="p-1">
                        <Card.Img
                            variant="top"
                            src={iPhone7}
                            style={{
                                maxHeight: "40vh",
                                minHeight: "200px",
                                maxWidth: "75%",
                                margin:"0 auto"
                            }}
                        />
                        <Card.Title>Iphone 7</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/Iphone 7 Plus`}
                >
                    <Card>
                        <Card.Img
                            variant="top"
                            src={iPhone7Plus}
                            style={{ maxHeight: "40vh", minHeight: "200px" }}
                        />
                        <Card.Title>Iphone 7 Plus</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/Iphone 8`}
                >
                    <Card>
                        <Card.Img
                            variant="top"
                            src={iPhone8}
                            style={{ maxHeight: "40vh", minHeight: "200px" }}
                        />
                        <Card.Title>Iphone 8</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/Iphone 8 plus`}
                >
                    <Card>
                        <Card.Img
                            variant="top"
                            src={iPhone8Plus}
                            style={{ maxHeight: "40vh", minHeight: "200px" }}
                        />
                        <Card.Title>Iphone 8 Plus</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/Iphone X`}
                >
                    <Card>
                        <Card.Img
                            variant="top"
                            src={IphoneX}
                            style={{ maxHeight: "40vh", minHeight: "200px" }}
                        />
                        <Card.Title>Iphone X</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/Iphone XR`}
                >
                    <Card>
                        <Card.Img
                            variant="top"
                            src={IphoneXR}
                            style={{ maxHeight: "40vh", minHeight: "200px" }}
                        />
                        <Card.Title>Iphone XR</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/Iphone XS`}
                >
                    <Card>
                        <Card.Img
                            variant="top"
                            src={IphoneXS}
                            style={{ maxHeight: "40vh", minHeight: "200px" }}
                        />
                        <Card.Title>Iphone XS</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/Iphone XS Max`}
                >
                    <Card>
                        <Card.Img
                            variant="top"
                            src={IphoneXSMax}
                            style={{ maxHeight: "40vh", minHeight: "200px" }}
                        />
                        <Card.Title>Iphone XS Max</Card.Title>
                    </Card>
                </Link>
            </Col>

            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/Iphone 11`}
                >
                    <Card>
                        <Card.Img
                            variant="top"
                            src={Iphone11}
                            style={{ maxHeight: "40vh", minHeight: "200px" }}
                        />
                        <Card.Title>Iphone 11</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/Iphone 11 Pro`}
                >
                    <Card>
                        <Card.Img
                            variant="top"
                            src={Iphone11Pro}
                            style={{ maxHeight: "40vh", minHeight: "200px" }}
                        />
                        <Card.Title>Iphone 11 Pro</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/Iphone 11 Pro Max`}
                >
                    <Card>
                        <Card.Img
                            variant="top"
                            src={Iphone11ProMax}
                            style={{ maxHeight: "40vh", minHeight: "200px" }}
                        />
                        <Card.Title>Iphone 11 Pro Max</Card.Title>
                    </Card>
                </Link>
            </Col>

            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/Iphone 12`}
                >
                    <Card>
                        <Card.Img
                            variant="top"
                            src={Iphone12}
                            style={{ maxHeight: "40vh", minHeight: "200px" }}
                        />
                        <Card.Title>Iphone 12</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/Iphone 12 Mini`}
                >
                    <Card>
                        <Card.Img
                            variant="top"
                            src={Iphone12Mini}
                            style={{ maxHeight: "40vh", minHeight: "200px" }}
                        />
                        <Card.Title>Iphone 12 mini</Card.Title>
                    </Card>
                </Link>
            </Col>

            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/Iphone 12 pro`}
                >
                    <Card>
                        <Card.Img
                            variant="top"
                            src={Iphone12Pro}
                            style={{ maxHeight: "40vh", minHeight: "200px" }}
                        />
                        <Card.Title>Iphone 12 Pro</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/Iphone 12 Pro Max`}
                >
                    <Card>
                        <Card.Img
                            variant="top"
                            src={Iphone12ProMax}
                            style={{ maxHeight: "40vh", minHeight: "200px" }}
                        />
                        <Card.Title>Iphone 12 Pro Max</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/Iphone SE 20202`}
                >
                    <Card>
                        <Card.Img
                            variant="top"
                            src={IphoneSE}
                            style={{ maxHeight: "40vh", minHeight: "200px" }}
                        />
                        <Card.Title>Iphone SE 2020</Card.Title>
                    </Card>
                </Link>
            </Col>
        </>
    );
}
