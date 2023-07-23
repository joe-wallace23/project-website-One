import React from 'react';
import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/Neutral Pink Boho Illustrated Shell Boutique Logo.png';

function Money(){
    return (
        <>
   <Navbar expand="lg" className=" navbar">
      <Container>
        <Navbar.Brand href='' to='/home'>


        <img
              src={logo}
              height="30"
              className="d-inline-block align-top jump"
              alt="Logo"
            />

           </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/home'  className='nav-link' >Home</Nav.Link>
            <Nav.Link href='/registration'  className='nav-link' >Registration</Nav.Link>
            <Nav.Link href='/login' className='nav-link' >Login</Nav.Link>
            <Nav.Link href='/account'  className='nav-link' >Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </> 
    )
}

export default Money