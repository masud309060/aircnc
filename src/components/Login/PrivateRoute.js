import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({  loggedInUser, children, ...rest }) => {
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
      loggedInUser.authorise ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    loggedInUser: state.authentication
  }
}

export default connect(mapStateToProps)(PrivateRoute);