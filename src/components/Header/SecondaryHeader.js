import React from 'react';
import './SecondaryHeader.css';
import { Nav, Navbar } from 'react-bootstrap';

const SecondaryHeader = () => {
  return (
    <div className="header">
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <h1 className="text-gradiant">Aircnc</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="nav_middle_item ml-auto">
            <strong>Dhaka Divition,Bangladesh</strong>
            <strong>Apr 13-17</strong>
            <b>3 Guests </b> 
            <i class="fas fa-search text-gradiant"></i>
          </div>
          <Nav className="ml-auto font-weight-bold d-flex align-items-center">
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

export default SecondaryHeader;