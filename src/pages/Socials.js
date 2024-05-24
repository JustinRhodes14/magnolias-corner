import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import { InstagramEmbed, TikTokEmbed } from 'react-social-media-embed';
import '../App.css';

function Socials() {
  return (
    <ParallaxProvider>
        <Parallax speed={10}>
            <br /><br /><br /><br /><br /><br />
            <Container>
            <div id="socials" className="scroll-block" />
                <Row>
                    <Col />
                    <Col>
                        <h1 className='social-page'><b>Follow my socials!</b></h1>
                    </Col>
                    <Col />
                </Row>
                <Row>
                    <Col>
                        <p className='about-page-p'>Check out my art accounts on Instagram and TikTok! I'm very active with my art, follow my accounts to stay up to date with my artwork!</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel indicators={false} controls={false} data-bs-theme="dark" width={'350px'}>
                        <Carousel.Item interval={5000}> 
                            <InstagramEmbed width={'350px'} placeholderSpinnerDisabled={true} url="https://www.instagram.com/p/CqOSOuruzuo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <InstagramEmbed width={'350px'} placeholderSpinnerDisabled={true} url="https://www.instagram.com/p/CuVniYvRVm8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <InstagramEmbed width={'350px'} placeholderSpinnerDisabled={true} url="https://www.instagram.com/p/CuXw2ldR_Cv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <InstagramEmbed width={'350px'} placeholderSpinnerDisabled={true} url="https://www.instagram.com/p/CwiMajas9KB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <InstagramEmbed width={'350px'} placeholderSpinnerDisabled={true} url="https://www.instagram.com/p/CinPrAwrsqJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <InstagramEmbed width={'350px'} placeholderSpinnerDisabled={true} url="https://www.instagram.com/p/CtjitGxrBYJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                        </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col>
                    <Carousel indicators={false} controls={false} data-bs-theme="dark" width={'350px'}>
                        <Carousel.Item interval={5000}> 
                            <TikTokEmbed width={'350px'} placeholderSpinnerDisabled={true} url="https://www.tiktok.com/@parklofistudio/video/7235503764747210027?is_from_webapp=1&sender_device=pc&web_id=7368157094354109994"></TikTokEmbed>
                        </Carousel.Item>
                        <Carousel.Item interval={15000}> 
                            <TikTokEmbed width={'350px'} placeholderSpinnerDisabled={true} url="https://www.tiktok.com/@parklofistudio/video/7347820581716380970?is_from_webapp=1&sender_device=pc&web_id=7368157094354109994"></TikTokEmbed>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}> 
                            <TikTokEmbed width={'350px'} placeholderSpinnerDisabled={true} url="https://www.tiktok.com/@parklofistudio/video/7241832492959796522?is_from_webapp=1&sender_device=pc&web_id=7368157094354109994"></TikTokEmbed>
                        </Carousel.Item>
                        <Carousel.Item interval={15000}> 
                            <TikTokEmbed width={'350px'} placeholderSpinnerDisabled={true} url="https://www.tiktok.com/@parklofistudio/video/7236491640284745002?is_from_webapp=1&sender_device=pc&web_id=7368157094354109994"></TikTokEmbed>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}> 
                            <TikTokEmbed width={'350px'} placeholderSpinnerDisabled={true} url="https://www.tiktok.com/@parklofistudio/video/7121502327663758638?is_from_webapp=1&sender_device=pc&web_id=7368157094354109994"></TikTokEmbed>
                        </Carousel.Item>
                        <Carousel.Item interval={15000}> 
                            <TikTokEmbed width={'350px'} placeholderSpinnerDisabled={true} url="https://www.tiktok.com/@parklofistudio/video/7114131839064935726?is_from_webapp=1&sender_device=pc&web_id=7368157094354109994"></TikTokEmbed>
                        </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col>
                    <Carousel indicators={false} controls={false} data-bs-theme="dark" width={'350px'}>
                        <Carousel.Item interval={10000}> 
                            <InstagramEmbed width={'350px'} placeholderSpinnerDisabled={true} url="https://www.instagram.com/p/C2S2SntxBWF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}> 
                            <InstagramEmbed width={'350px'} placeholderSpinnerDisabled={true} url="https://www.instagram.com/p/C69GhAzx9Hr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                        </Carousel.Item>
                        <Carousel.Item interval={10000}> 
                            <InstagramEmbed width={'350px'} placeholderSpinnerDisabled={true} url="https://www.instagram.com/p/ChJErp0OPAz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}> 
                            <InstagramEmbed width={'350px'} placeholderSpinnerDisabled={true} url="https://www.instagram.com/p/CuFWqpExON8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                        </Carousel.Item>
                        <Carousel.Item interval={10000}> 
                            <InstagramEmbed width={'350px'} placeholderSpinnerDisabled={true} url="https://www.instagram.com/p/CaXwRnSp5JZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}> 
                            <InstagramEmbed width={'350px'} placeholderSpinnerDisabled={true} url="https://www.instagram.com/p/C2cxTWOOgiO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                        </Carousel.Item>
                    </Carousel>
                    </Col>
                </Row>
            </Container>
        </Parallax>
    </ParallaxProvider>
  );
}

export default Socials;