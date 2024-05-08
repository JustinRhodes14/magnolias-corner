import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import aboutmagnolia from '/Users/rhodes/Projects/magnoliasCorner/magnolias-corner/src/pictures/aboutmagnolia.jpeg';
import { FaInstagram, FaPinterest, FaTiktok, FaYoutube } from "react-icons/fa";

function About() {
  return (
    <Container className='p-5' fluid>
        <Row>

        </Row>
        <Row>
            <Col sm={1} className='p-4'>
                <Image src={aboutmagnolia} width={'456px'} height={'456px'} roundedCircle/>
            </Col>
            <Col sm={3} />
            <Col sm={6}>
                <h3>Welcome to my Fashion Corner!</h3>
                <p>Hi there! My name is Charlotte Park, but I usually go my pen name
                    C. Magnolia, hence the name of this space. I've had a passion for fashion since middle school,
                    and I love to bring my ideas to life through my artwork, social media, and writing.
                    My goal is to build a community around my love for fashion, coming up with unique creations
                    for outfits and creating fashion content centered around showcasing outfit ideas.
                    I want to be able to show the people that regardless of what your closet looks like,
                    you can stylize in thousands of different ways, all with a little bit of creativity!
                </p>
                <p>You can find my work on my social media platforms, feel free to visit them via the buttons on the side.
                    And if you like what you see, be sure to follow along and become part of the growing community!
                </p>
            </Col>
            <Col sm={1} />
            <Col sm={1}>
                <Stack direction='vertical' gap={2}>
                    <FaYoutube size={'fa-xs'} color='#ed302f' />
                    <FaInstagram size={'fa-xs'} color='#ac2bac' />
                    <FaPinterest size={'fa-xs'} color='#c61118' />
                    <FaTiktok size={'fa-xs'} color='#0c0130' />
                </Stack>
            </Col>
        </Row>
    </Container>
  );
}

export default About;