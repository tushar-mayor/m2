import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Brands() {
    function importAll(r) {
        let cardList = [];
        cardList = r.keys().map((item) => {
            const name = item.split(".")[1].replace("/", "");
            const url = r(item).default;
            return { name, url };
        });
        return cardList;
    }

    const images = importAll(
        require.context("../Assests/svg/", false, /\.(png|jpe?g|svg)$/)
    );

    const columnStyle = {
        display: "flex",
        justifyContent: "center",
        minHeight: "8rem",
        maxHeight: "8rem",
    };
    return (
        <>
            <h2 className="brandHeading">Featured Brands:-</h2>
            <Row
                className="row-cols-1 row-cols-md-6
                p-5 justify-content-center"
                style={{ gap: "20px" }}
            >
                {images.map((image) => (
                    <Link to={`/BrandModel/${image.name}`} key={image.name}>
                        <Col
                            key={image.url}
                            className="border p-3 shadow"
                            style={columnStyle}
                        >
                            <img
                                src={image.url}
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    textAlign: "center",
                                }}
                                alt="brand"
                            />
                        </Col>
                    </Link>
                ))}
            </Row>
        </>
    );
}
