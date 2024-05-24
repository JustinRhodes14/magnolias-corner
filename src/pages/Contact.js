import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Button, Container } from 'react-bootstrap';

function Contact() {

  return (
    <Container fluid>
        <Form action="https://formspree.io/f/meqywqdn" method="POST">
            <br /><br /><br />
            <div id="contact" className="scroll-block" />
            <div className='Form-header'>
                <h1 className='about-page'>Commisions, Conversation, Questions?</h1>
                <p className='about-page-p'>Commision requests? Inquiry for work? Questions about my process? Feel free to reach out below!</p>
                <p className='about-page-p'>When reaching out, please be sure to include your name, and I'll get back to you as soon as possible!</p>
                <p className='about-page-p'>Even if you don't necessarily have a question, I'm always open to chat <span role='img' aria-label='Smile Emoji'>🙂</span></p>
            </div>
            <Row>
                <Col />
                <Col>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control id="email" type="email" name="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control id="textarea" type="textarea" name="textarea" as="textarea" rows={5} />
                    </Form.Group>
                </Col>
                <Col />
            </Row>
            <br /><br />
            <Form.Group as={Row}>
                <Col />
                <Col>
                    <Button size='lg' variant="light" type="submit">Submit</Button>
                </Col>
                <Col />
            </Form.Group>
        </Form>
    </Container>
  );
}

export default Contact;