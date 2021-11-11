import React, { useState } from "react";
import { NavLink,useHistory } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { Form, Spinner, Button } from "react-bootstrap";
import useFirebase from "../../hooks/useFirebase";

const Register = () => {
   const { user, registerUser, isLoading, authError } = useFirebase();
    const history = useHistory()
    const [loginData, setLoginData] = useState({});
    const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
        if(loginData.password!==loginData.password2){
            alert(' password  not match! correct it');
            return
        }
      registerUser( loginData.email, loginData.password, loginData.name, history );
      e.preventDefault();
    };

    return (
      <div class="login-container text-white">
      <div className="container" style={{paddingTop: "140px"}}>
            <h1 className="mb-4">Register</h1>
            {!isLoading && <Form onSubmit={handleLoginSubmit} className="w-25">
              <Form.Control
                placeholder="Name"
                name="name"
                type="text"
                required
                onBlur={handleOnBlur}
                className="mb-2"
              />
              <Form.Control
                placeholder="Email"
                name="email"
                type="email"
                required
                onBlur={handleOnBlur}
                className="mb-2"
              />
              <Form.Control
                placeholder="Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                className="mb-2"
              />
              <Form.Control
                placeholder="Retype Password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                className="mb-2"
              />
              <Button
                className="button-light mb-4"
                type="submit"
              >
                Register
              </Button>
              <div className="d-flex text-white">
            <h6 className="fw-normal">New User? Please</h6> 
            <NavLink to="/login">
              <h6 className="text-white ms-2">Login</h6>
            </NavLink>
            </div>
            </Form>}
            {isLoading && <Spinner animation="border" variant="dark" />}
            {user?.email && alert("User created successfully!")}
            {authError && alert(`${authError}`)}
       
      </div>
    </div>
    );
};

export default Register;