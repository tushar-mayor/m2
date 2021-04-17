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
        require.context(
            "../Assests/Images/Nokia",
            false,
            /\.(png|jpe?g|svg|webp)$/
        )
    );
    const Asus = importAll(
        require.context(
            "../Assests/Images/Asus",
            false,
            /\.(png|jpe?g|svg|webp)$/
        )
    );
    const BlackBerry = importAll(
        require.context(
            "../Assests/Images/Blackberry",
            false,
            /\.(png|jpe?g|svg|webp)$/
        )
    );
    const HTC = importAll(
        require.context(
            "../Assests/Images/HTC",
            false,
            /\.(png|jpe?g|svg|webp)$/
        )
    );
    const Huawei = importAll(
        require.context(
            "../Assests/Images/Huawei",
            false,
            /\.(png|jpe?g|svg|webp)$/
        )
    );
    const Lenovo = importAll(
        require.context(
            "../Assests/Images/Lenovo",
            false,
            /\.(png|jpe?g|svg|webp)$/
        )
    );
    const LG = importAll(
        require.context(
            "../Assests/Images/LG",
            false,
            /\.(png|jpe?g|svg|webp)$/
        )
    );
    const Samsung = importAll(
        require.context(
            "../Assests/Images/Samsung",
            false,
            /\.(png|jpe?g|svg|webp)$/
        )
    );
    const SonyErricson = importAll(
        require.context(
            "../Assests/Images/SonyErricson",
            false,
            /\.(png|jpe?g|svg|webp)$/
        )
    );

    const Sony = importAll(
        require.context(
            "../Assests/Images/Sony",
            false,
            /\.(png|jpe?g|svg|webp)$/
        )
    );
    const OnePlus = importAll(
        require.context(
            "../Assests/Images/OnePlus",
            false,
            /\.(png|jpe?g|svg|webp)$/
        )
    );

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
                    <Card className="h-100" style={{ minHeight: "20rem" }}>
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

    switch (Brand) {
        case "Asus":
            cards = Asus.map((image) => links(image));
            break;
        case "Blackberry":
            cards = BlackBerry.map((image) => links(image));
            break;
        case "HTC":
            cards = HTC.map((image) => links(image));
            break;
        case "Huawei":
            cards = Huawei.map((image) => links(image));
            break;
        case "Lenovo":
            cards = Lenovo.map((image) => links(image));
            break;
        case "LG":
            cards = LG.map((image) => links(image));
            break;
        case "Samsung":
            cards = Samsung.map((image) => links(image));
            break;
        case "SonyErricson":
            cards = SonyErricson.map((image) => links(image));
            break;
        case "Sony":
            cards = Sony.map((image) => links(image));
            break;
        case "OnePlus":
            cards = OnePlus.map((image) => links(image));
            break;
        default:
            cards = Nokia.map((image) => links(image));
    }

    return (
        <Container className="p-5">
            <h1>{Brand} Models</h1>
            <Row className="row-cols-md-4 row-cols-1" style={{ gap: "2rem 0" }}>
                {cards.map((card) => card)}
            </Row>
        </Container>
    );
}
