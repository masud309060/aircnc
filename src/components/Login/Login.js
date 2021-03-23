import React, { useState } from 'react';
import './Login.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { signInWithEmailAndPassword, signUpnWithEmailAndPassword, singInWithGoogle } from '../../redux/Actions/authenticationActions';

const Login = ({ loggedInUser,singInWithGoogle, signUpnWithEmailAndPassword, signInWithEmailAndPassword }) => {
  
  const [newUser, setNewUser] = useState(true)
  const [ input , setInput ] = useState({
    name: "",
    email: "email",
    password: "",
  })

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleChange = (e) => {
    setInput({
      ...input, 
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("click", input)
    if(newUser && input.name && input.email && input.password) {
      signUpnWithEmailAndPassword(input.name, input.email, input.password)
      history.replace(from);
    } 
    else if(!newUser && input.email && input.password) {
      signInWithEmailAndPassword(input.email, input.password)
      history.replace(from);
    }
  }
  const googleSignIn = () => {
    singInWithGoogle();
    setTimeout(()=> {
      history.replace(from);
    }, 10000)
  }

  return (
    <div>
      <Link to="/">
        <h1 className="text-gradiant text-center mt-3">Aircnc</h1>
      </Link>
      <Row>
        <Col md={4} className="mx-auto">
        <Form className="login_area" onSubmit={handleSubmit} >
          <h3 className="mb-3 font-weight-bold">
            { newUser ? "Sign up" : " Sign in"}
          </h3>
          {
            newUser && 
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name: </Form.Label>
              <Form.Control 
              onBlur={handleChange} 
              name="name"
              type="text" 
              placeholder="Enter your name" />
            </Form.Group>
          }

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address: </Form.Label>
            <Form.Control 
            onBlur={handleChange} 
            name="email"
            type="email" 
            placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password: </Form.Label>
            <Form.Control 
            onBlur={handleChange} 
            name="password"
            type="password" 
            placeholder="Password" />
          </Form.Group>
          <Button 
          variant="success" type="submit" size="lg" block >
            Submit
          </Button> 
          <div className="text-right">
            <small> 
              { newUser ? "Already have an account? " : "Create an account. "}  
            </small> 
            <b onClick={() => setNewUser(!newUser)} className="login_option_change">
              { newUser ? "Sign in": "Sign up"}
            </b>
          </div>
        </Form>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mx-auto">
          <div 
          className="sign_in_with_google mt-3"
          onClick={googleSignIn}
          >
            <i class="fab fa-google"></i>
            <span>Sign in With Google</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedInUser: state.authentication
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signUpnWithEmailAndPassword: (name, email, password) => dispatch(signUpnWithEmailAndPassword(name, email, password)),
    signInWithEmailAndPassword: (email, password) => dispatch(signInWithEmailAndPassword(email, password)),
    singInWithGoogle: () => dispatch(singInWithGoogle())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);