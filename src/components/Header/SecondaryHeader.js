import React from 'react';
import './SecondaryHeader.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../redux/Actions/authenticationActions';
import Moment from 'react-moment';
import moment from 'moment';

const SecondaryHeader = ({loggedInUser, signOut, searchItem}) => {

  return (
    <div className="header">
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <h1 className="text-gradiant">Aircnc</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="nav_middle_item ml-auto">
            <strong>{searchItem.location}</strong>
            <strong>
              <Moment format="MMM DD">{searchItem.arrival}</Moment> 
              -
              <Moment format="DD">{searchItem.departure}</Moment>
            </strong>
            <b>{searchItem.guest} Guests</b> 
            <i class="fas fa-search text-gradiant"></i>
          </div>
          <Nav className="ml-auto font-weight-bold d-flex align-items-center">
            <Nav.Link className="mr-3">Help</Nav.Link>
            {
              loggedInUser.authorise ? 
              <Nav.Link as={Link} to="/login" className="mr-3">{loggedInUser?.user.displayName}</Nav.Link> :
              <Nav.Link as={Link} to="/login" className="mr-3">Log in</Nav.Link>
            }
            {
              loggedInUser.authorise ? 
              <Nav.Link>
                <button onClick={signOut} className="btn-gradiant">Sign Out</button>
              </Nav.Link> : 
              <Nav.Link as={Link} to="/login">
                <button className="btn-gradiant">Sign up</button>
              </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    loggedInUser: state.authentication,
    searchItem: state.hotels.searchItem
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondaryHeader);