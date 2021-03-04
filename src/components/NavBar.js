import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header
        className="main-header home-header"
        style={{ backgroundColor: "#fff" }}>
        <Navbar expand="lg" variant="light" bg="white" fixed="top">
          <Container>
            <Navbar.Brand href="/">
              <img
                src="/img/Dzinly.png"
                title="Exterior Design of Your Home with Dzinly"
                alt="Dzinly Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home"> Try It Out</Nav.Link>
                <Nav.Link href="#link">Pricing</Nav.Link>
                <Nav.Link href="#home">Gallery</Nav.Link>
                <Nav.Link href="#link">Professionals</Nav.Link>
                <Nav.Link href="/login">Sign In</Nav.Link>
                <Nav.Link href="/get-started" className="blue-btn">
                  Get Started
                </Nav.Link>
                <Nav.Link href="#link">
                  <i className="fa fa-instagram"></i>
                </Nav.Link>
                <Nav.Link href="#link">
                  <i className="icon-edit"></i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default NavBar;
