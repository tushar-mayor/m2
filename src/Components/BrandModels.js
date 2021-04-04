import React from "react";
import { Card, Container, Row } from "react-bootstrap";
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

    const Apple = importAll(
        require.context("../Assests/Images/Apple", false, /\.(png|jpe?g|svg)$/)
    );
    const Nokia = importAll(
        require.context("../Assests/Images/Nokia", false, /\.(png|jpe?g|svg)$/)
    );
    let cards = [];

    const links = (image) => {
        const { name, url } = image;
        return (
            <Link
                className="text-decoration-none text-dark text-center"
                to={`/Phone/${name}`}
                key={name}
            >
                <Card>
                    <Card.Img variant="top" src={url} />
                    <Card.Title>{name}</Card.Title>
                </Card>
            </Link>
        );
    };

    switch (Brand) {
        case "asus":
            cards = Apple.map((image) => links(image));
            break;
        default:
            cards = Nokia.map((image) => links(image));
    }

    return (
        <Container className="p-5">
        <h1>{Brand} Models</h1>
            <Row className="row-cols-md-4">{cards.map((card) => card)}</Row>;
        </Container>
    );
}
