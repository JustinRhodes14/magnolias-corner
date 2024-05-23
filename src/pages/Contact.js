import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Button } from 'react-bootstrap';

function Contact() {

  return (
        <Form action="https://formspree.io/f/meqywqdn" method="POST">
            <div id="contact" className="scroll-block" />
            <div className='Form-header'>
                <h1 className='about-page'>Commisions, Conversation, Questions?</h1>
                <p className='about-page-p'>Commision requests? Inquiry for work? Questions about my process? Feel free to reach out below!</p>
                <p className='about-page-p'>When reaching out, please be sure to include your name, and I'll get back to you as soon as possible!</p>
                <p className='about-page-p'>Even if you don't necessarily have a question, I'm always open to chat <span role='img' aria-label='Smile Emoji'>🙂</span></p>
            </div>
            <Row>
                <Col />
                <Col xs={4}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control id="email" type="email" name="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control id="textarea" type="textarea" name="textarea" as="textarea" rows={5} />
                    </Form.Group>
                </Col>
                <Col />
            </Row>
            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 5 }}>
                    <Button className='contact-button' size='lg' variant="light" type="submit">Submit</Button>
                </Col>
            </Form.Group>
        </Form>
  );
}

export default Contact;