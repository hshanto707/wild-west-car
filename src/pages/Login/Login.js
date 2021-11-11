import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { Button, Form, Spinner } from "react-bootstrap";
// import useAuth from '../../hooks/useAuth'
import useFirebase from "../../hooks/useFirebase";
import './Login.css'

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, signInWithGoogle, loginUser, isLoading, authError } = useFirebase();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    // alert("hello");
    loginUser(loginData.email, loginData.password, history, location );
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(history, location);
  };

const Login = () => {
    signInWithGoogle(history, location);
  };

  return (
    <div class="login-container text-white">
      <div className="container" style={{paddingTop: "200px"}}>
          <h1 className="mb-4">Login</h1>
          <Form onSubmit={handleLoginSubmit} className="w-25">
            <Form.Control
              placeholder="Your email"
              type="email"
              name="email"
              onBlur={handleOnBlur}
              className="mb-2"
            />
            <Form.Control
              placeholder="Your password"
              type="password"
              name="password"
              onBlur={handleOnBlur}
              className="mb-2"
            />
            <Button
              type="submit"
              className="button-light mb-4"
            >
              Login
            </Button>
            <br/>
            <div className="d-flex text-white">
            <h6 className="fw-normal">New User? Please</h6> 
            <NavLink to="/register">
              <h6 className="text-white ms-2">Register</h6>
            </NavLink>
            </div>
            {isLoading && <Spinner animation="border" variant="dark" />}
            {user?.email && 
              alert("Login successfully!")
            }
            {authError && alert(`${authError}`)}
          </Form>
        </div>
    </div>
  );
};

export default Login;