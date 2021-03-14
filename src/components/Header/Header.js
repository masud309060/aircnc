import React from "react";
import './Header.css';
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <h1 className="text-gradiant">Aircnc</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto font-weight-bold d-flex align-items-center">
            <Nav.Link className="mr-3">Host your home</Nav.Link>
            <Nav.Link className="mr-3">Host your experiance</Nav.Link>
            <Nav.Link className="mr-3">Help</Nav.Link>
            <Nav.Link className="mr-3">Log in</Nav.Link>
            <Nav.Link>
              <button className="btn-gradiant">Sign up</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
