import React from 'react';
import { Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import './Pay.css'

const Pay = () => {
  return (
    <div>
      <div className="pay-bg">
        <img src="https://cdn.motor1.com/images/mgl/7MvL6/s1/2020-lamborghini-aventador-svj-roadster.jpg" alt="" />
      </div>
      <div className="hero-text text-white ms-5">
        <h1 className="mb-sm-3 pay-title">Payment System Coming Soon</h1>
        <NavLink to="/">
          <Button className="button-light">Go Back To Home Page</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Pay;