import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function IPhoneModels() {
    function importAll(r) {
        let cardList = [];
        cardList = r.keys().map((item) => {
            const name = item.split(".")[1].replace("/", "");
            const url = r(item).default;
            return { name, url };
        });
        return cardList;
    }

    const Mac = importAll(
        require.context(
            "../Assests/Images/Mac",
            false,
            /\.(png|jpe?g|svg|webp)$/
        )
    );
    const links = (image) => {
        const { name, url } = image;
        return (
            <Col>
                <Link
                    className="text-decoration-none text-dark text-center"
                    to={`/Phone/${name}`}
                    key={name}
                >
                    <Card style={{ minHeight: "20rem" }}>
                        <Card.Img
                            variant="top"
                            src={url}
                            style={{
                                maxHeight: "40vh",
                                minHeight: "10rem",
                                padding: "2rem",
                                objectFit: "fill",
                            }}
                            height="80%"
                        />
                        <Card.Title>{name}</Card.Title>
                    </Card>
                </Link>
            </Col>
        );
    };
    const cards = Mac.map((image) => links(image));

    return <>{cards.map((card) => card)}</>;
}
