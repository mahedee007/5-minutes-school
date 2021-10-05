import React from 'react';
import "./Header.css";
import { Container, Nav, Navbar  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/amy-logo.png';


const Header = () => {
    return (
        <Container>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        /> 
      5 Minitues Schools
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className=" menubar ms-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Link className="menus"  to="/home">Home</Link>
      <Link className="menus" to="/about">About</Link>
      <Link className="menus" to="/services">Services</Link>
      <Link className="menus" to="/contacts">Contuct Us</Link>
      
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
  

  
  
        </Container>
    );
};

export default Header;