import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// TODO: Styling of header, maybe add a title above the Navbar?
// Some parallax scrolling effects?
// Single page website

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="" href="#home">Magnolias Corner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#commisions">Commissions</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#fashion">Fashion</Nav.Link>
            <Nav.Link href="#illustrations">Illustrations</Nav.Link>
            <Nav.Link href="#literature">Literature</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#socials">Socials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;