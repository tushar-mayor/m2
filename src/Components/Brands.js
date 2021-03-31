import React from "react";
import {  Row, Col } from "react-bootstrap";
export default function Brands() {
    function importAll(r) {
        return r.keys().map(r);
      }
      
      const images = importAll(require.context('../Assests/svg/', false, /\.(png|jpe?g|svg)$/));
      

      const columnStyle = {
        display:"flex",
        justifyContent:"center",
        minHeight:"8rem",
        maxHeight:"8rem",

    };
    return (
        <>
                <h2 className="font-weight-bold p-3">Featured Brands:-</h2>
            <Row
                className="row-cols-1 row-cols-md-6
                 p-5 justify-content-center"
                style={{ gap: "20px" }}
            >
            {
                images.map(image=>(<Col key={image.default} className="border p-3 shadow"  style={columnStyle}>
                    <img src={image.default} style={{maxWidth:"100%",maxHeight:"100%",textAlign:"center"}}  alt="brand" />
                </Col>)

                )
                }
            </Row>
        </>
    );
}
