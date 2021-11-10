import React from 'react';
import { Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
    <div>
      <div className="not-found-bg">
        <img src="https://cdn.motor1.com/images/mgl/7MvL6/s1/2020-lamborghini-aventador-svj-roadster.jpg" alt="" />
      </div>
      <div className="hero-text text-white ms-5">
        <h1 className="mb-sm-3 not-found-title">404</h1>
        <p className="text-white mb-sm-3 not-found-text">Page Not Found</p>
        <NavLink to="/">
          <Button className="button not-found-btn">Go Back To Home Page</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;