import React from "react";
import { Card, Col } from "react-bootstrap";

export default function VapeModels() {
    function importAll(r) {
        let cardList = [];
        cardList = r.keys().map((item) => {
            const name = item.split(".")[1].replace("/", "");
            const url = r(item).default;
            return { name, url };
        });
        return cardList;
    }

    const vapes = importAll(
        require.context(
            "../Assests/Images/Vapes",
            false,
            /\.(png|jpe?g|svg|webp)$/
        )
    );
    console.log(vapes);
    return (
        <>
            {vapes.map((vape) => (
                <Col>
                    <Card className="h-100 d-flex align-items-center justify-content-center p-1">
                        <Card.Img
                            variant="top"
                            src={vape.url}
                            style={{
                                maxHeight: "40vh",
                                minHeight: "200px",
                            }}
                        />
                    </Card>
                </Col>
            ))}
        </>
    );
}
