import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// TODO: Styling of header, maybe add a title above the Navbar?
// Some parallax scrolling effects?
// Single page website
// Use Fade effect from React bootstrap

function Header() {
  return (
    <Navbar className='justify-content-center' sticky='top'>
          <Nav fill variant='underline' className='justify-content-center'>
            <Nav.Link className='px-5' href="#about">About</Nav.Link>
            <Nav.Link className='px-5' href="#contact">Contact</Nav.Link>
            <Nav.Link className='px-5' href="#socials">Socials</Nav.Link>
          </Nav>
    </Navbar>
  );
}

export default Header;