import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navs.css";

const Navs = () => {
    return(
        <>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img src="images/logo.png" alt=""  title="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#home">Explore Foods</Nav.Link>
            <Nav.Link href="#home">Reviews</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            {/* <Nav.Link href="#link">About Us</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link id="lastNav">1800 789 123</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>
    );
}


export default Navs;