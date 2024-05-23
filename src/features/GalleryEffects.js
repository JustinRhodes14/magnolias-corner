import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import '../App.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';
import art1 from '../pictures/art1.jpeg';
import art2 from '../pictures/art2.jpeg';
import art3 from '../pictures/art3.jpeg';
import art4 from '../pictures/art4.jpeg';
import art5 from '../pictures/art5.jpeg';
import art6 from '../pictures/art6.png';
import art7 from '../pictures/art7.png';
import art8 from '../pictures/art8.png';
import banner_breakpoint from '../pictures/breakpoint-banner.png';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


function GalleryEffects() {
  return (
    <ParallaxProvider>
        <Container fluid className='parallax-container'>
            <br /><br /><br /><br />
            <Row>
                <Col sm={1}>
                    <Parallax speed={7} easing={'easeOutQuad'}>
                        <Image src={art1} alt='Art Piece #1' width={'456px'} height={'456px'}/>
                    </Parallax>
                </Col>
                <Col sm={3}/>
                <Col sm={1}>
                    <Parallax speed={-10} easing={'easeOutQuad'}>
                        <Image src={art2} alt='Art Piece #2' width={'456px'} height={'456px'}/>
                    </Parallax>
                </Col>
                <Col sm={3}/>
                <Col sm={1}>
                    <Parallax speed={13} easing={'easeOutQuad'}>
                        <Image src={art3} alt='Art Piece #3' width={'456px'} height={'456px'}/>
                    </Parallax>
                </Col>
                <Col sm={3}/>
            </Row>
            <Row>
                <Col sm={2} />
                <Col sm={3}>
                    <Parallax speed={14} easing={'easeOutQuad'}>
                        <Image src={art4} alt='Art Piece #4' width={'456px'} height={'456px'}/>
                    </Parallax>
                </Col>
                <Col sm={1} />
                <Col sm={3}>
                    <Parallax speed={3} easing={'easeOutQuad'}>
                        <Image src={art5} alt='Art Piece #5' width={'456px'} height={'456px'}/>
                    </Parallax>
                </Col>
            </Row>
            <Row>
            <Col sm={1}>
                    <Parallax speed={11} easing={'easeOutQuad'}>
                        <Image src={art6} alt='Art Piece #6' width={'456px'} height={'456px'}/>
                    </Parallax>
                </Col>
                <Col sm={3}/>
                <Col sm={1}>
                    <Parallax speed={-12} easing={'easeOutQuad'}>
                        <Image src={art7} alt='Art Piece #7' width={'456px'} height={'456px'}/>
                    </Parallax>
                </Col>
                <Col sm={3}/>
                <Col sm={1}>
                    <Parallax speed={4} easing={'easeOutQuad'}>
                        <Image src={art8} alt='Art Piece #8' width={'456px'} height={'456px'}/>
                    </Parallax>
                </Col>
                <Col sm={3}/>
            </Row>
        </Container>
        <br /><br /><br /><br /><br /><br />
        <Container fluid>
            <Parallax speed={-10} opacity={[0.75,1]}>
                <Image src={banner_breakpoint} alt='Banner breakpoint' width={'100%'} height={'400px'}/>
            </Parallax>
        </Container>
        <br /><br /><br /><br /><br /><br />
    </ParallaxProvider>
  );
}

export default GalleryEffects;