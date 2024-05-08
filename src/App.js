import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header';
import Gallery from './components/home/Gallery';
import Sidebar from './components/home/Sidebar';
import About from './pages/About';

// GOAL: Vogue fashion magazine displaying concepts, fashion shows, 
// and general discussion around fashion

// TODO: Parallax scrolling, page breaks should be some gothic looking thing,
// Page anchors to snap to different sections

function App() {
  return (
    <div>
    <Header />
    <Container fluid>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous" 
      />
      <Row>
      <Col sm={3}/>
      <Col sm={5} className='p-4'>
        <Gallery />
      </Col>
      <Col sm={1}/>
      <Col sm={3}>
        <Sidebar />
      </Col>
      </Row>
    </Container>
    <br />
    <br />
    <About />
    </div>
  );
}

export default App;
