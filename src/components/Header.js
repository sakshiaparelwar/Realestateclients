import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "../pages/style.css";

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Nav.Link className="main" href="/">
            <img src="logonavbar.png" alt="" className="logo" />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div>
          <Button className="signup">Sign Up</Button>
          <Button className="signup">Login</Button>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
