import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import magnolia_about from '../pictures/magnolia-about.png';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

function About() {
  return (
    <ParallaxProvider>
        <Parallax speed={10} opacity={[0.75,1]}>
            <Container fluid>
                <div id="about" className="scroll-block" />
                <Row>
                    <Col>
                        <Image src={magnolia_about} fluid/>
                    </Col>
                    <Col>
                        <br /><br /><br />
                        <h3 className='about-page'>Nice to meet you, my name is Charlotte Park</h3>
                        <p className='about-page-p'>Welcome to my fashion corner! I Usually go my pen name,
                            C. Magnolia, hence the name of this space. I've had a passion for fashion since middle school,
                            and I love to bring my ideas to life through my artwork, social media, and writing.
                            My goal is to build a community around my love for fashion, coming up with unique creations
                            for outfits and creating fashion content centered around showcasing outfit ideas.
                            I want to be able to show the people that regardless of what your closet looks like,
                            you can stylize in thousands of different ways, all with a little bit of creativity!
                        </p>
                        <p className='about-page-p'>You can find my work on my social media platforms, feel free to visit them via the buttons on the side.
                            And if you like what you see, be sure to follow along and become part of the growing community!
                        </p>
                    </Col>
                </Row>
            </Container>
            <br /><br /><br />
        </Parallax>
    </ParallaxProvider>
  );
}

export default About;