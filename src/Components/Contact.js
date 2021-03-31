import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import NavBar from "./NavBar";
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
const userID = init("user_yPisAsNeuMpjKR0aANjGy");
export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    var templateParams = {
        from_name: name,
        message: message,
        from_email:email,
        from_phone:phone
    };
    
    const resetFields = () =>{
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
    }

    const submitHandler = (e) => {
        e.preventDefault();
        emailjs.send("tusharmayor9", "template123456", templateParams, userID);
        resetFields()
    };
    return (
        <>
            <Helmet>
                <title>Contact</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <NavBar page="about " />
            <Row className="m-0 p-2  justify-content-between">
                <Col lg={4} sm={12} className="m-auto ">
                    <h1>Contact</h1>
                    <h5>
                        Phone: <span>0178507470, 07848372777</span>
                    </h5>
                    <h5>
                        Address:{" "}
                        <span className="text-capitalize">
                            {" "}
                            31 henley street,stratford-upon-avon,CV31 6QW
                        </span>
                    </h5>
                </Col>
                <Col lg={7} sm={12}>
                    {/* <div className="ContactCover Cover  " 
            style={{ height: "90vh" }}
          /> */}
                    <Form onSubmit={(e)=>submitHandler(e)} className=" p-5 h-100">
                        <h2 className="text-center">Queries</h2>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="Email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Enter Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="dark" type="submit">Submit</Button>{" "}
                    </Form>
                </Col>
            </Row>
            <br />
        </>
    );
}
