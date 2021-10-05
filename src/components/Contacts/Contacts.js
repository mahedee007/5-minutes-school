import React from 'react';
import { Container, Form } from 'react-bootstrap';

const Contacts = () => {
    return (
        <Container>
            <h1 className="text-center mt-5">Contact Us</h1>
            <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Your Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <button className=" btn btn-lg btn-danger">Submit</button>
</Form>
        </Container>
    );
};

export default Contacts;