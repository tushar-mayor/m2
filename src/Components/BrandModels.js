import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BrandModels(props) {
    const { Brand } = props.match.params;

    function importAll(r) {
        let cardList = [];
        cardList = r.keys().map((item) => {
            const name = item.split(".")[1].replace("/", "");
            const url = r(item).default;
            return { name, url };
        });
        return cardList;
    }

    const Nokia = importAll(
        require.context("../Assests/Images/Nokia", false, /\.(png|jpe?g|svg)$/)
    );
    const Asus = importAll(
        require.context(
            "../Assests/Images/Asus",
            false,
            /\.(png|jpe?g|svg|webp)$/
        )
    );
    console.log(Asus);

    let cards = [];

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
                            style={{ maxHeight: "40vh", minHeight: "200px" }}
                        />
                        <Card.Title>{name}</Card.Title>
                    </Card>
                </Link>
            </Col>
        );
    };

    switch (Brand) {
        case "Asus":
            cards = Asus.map((image) => links(image));
            break;
        default:
            cards = Nokia.map((image) => links(image));
    }

    return (
        <Container className="p-5">
            <h1>{Brand} Models</h1>
            <Row className="row-cols-md-4 " style={{ gap: "2rem 0" }}>
                {cards.map((card) => card)}
            </Row>
            ;
        </Container>
    );
}
