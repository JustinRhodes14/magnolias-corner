import React from 'react';
import './App.css';
import Image from 'react-bootstrap/esm/Image';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Container from 'react-bootstrap/esm/Container';

import Header from './features/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import magnoliaBanner from './pictures/magnolia-banner.png';
import GalleryEffects from './features/GalleryEffects';
import banner_breakpoint from './pictures/breakpoint-banner.png';
import Socials from './pages/Socials';

function App() {
  return (
    <div className='parallax-container'>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap" rel="stylesheet" />
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous" 
        />
      </head>
      <Image src={magnoliaBanner} fluid></Image>
      <div id="home" className="scroll-block" />
      <Header />
      <GalleryEffects />
      <About />
      <Container fluid>
          <ParallaxProvider>
            <Parallax speed={-10} opacity={[0.75,1]}>
                <Image src={banner_breakpoint} alt='Banner breakpoint' width={'100%'} height={'400px'}/>
            </Parallax>
          </ParallaxProvider>
      </Container>
      <Socials />
      <br /><br /><br /><br />
      <Container fluid>
          <ParallaxProvider>
            <Parallax speed={-10} opacity={[0.75,1]}>
                <Image src={banner_breakpoint} alt='Banner breakpoint' width={'100%'} height={'400px'}/>
            </Parallax>
          </ParallaxProvider>
      </Container>
      <Contact id="contact"/>
      <br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default App;
