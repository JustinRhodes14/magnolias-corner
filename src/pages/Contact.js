import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


function Contact() {
  return (
        <Form>
            <div className='Form-header'>
                <h1 className='about-page'>Commisions, Conversation, Questions?</h1>
                <p className='about-page-p'>Commision requests? Inquiry for work? Questions about my process? Feel free to reach out below!</p>
                <p className='about-page-p'>When reaching out, please be sure to include your name, and I'll get back to you as soon as possible!</p>
                <p className='about-page-p'>Even if you don't necessarily have a question, I'm always open to chat <span role='img' aria-label='Smile Emoji'>🙂</span></p>
            </div>
            <Row>
                <Col sm={3}/>
                <Col sm={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                </Col>
                <Col sm={3}/>
            </Row>
        </Form>
  );
}

export default Contact;