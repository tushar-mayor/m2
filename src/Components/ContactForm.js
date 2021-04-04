import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
const userID = init("user_yPisAsNeuMpjKR0aANjGy");
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  var templateParams = {
    from_name: name,
    message: message,
    from_email: email,
    from_phone: phone,
  };

  const resetFields = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    emailjs.send("tusharmayor9", "template123456", templateParams, userID);
    resetFields();
  };
  return (
    <>
      <Form onSubmit={(e) => submitHandler(e)} className=" p-5 h-100">
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
        <Button variant="dark" type="submit">
          Submit
        </Button>{" "}
      </Form>
    </>
  );
}
