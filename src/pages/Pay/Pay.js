import React from 'react';
import { Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import './Pay.css'

const Pay = () => {
  return (
    <div className="text-center">
      <div className="pay-bg">
        <img src="https://cdn.motor1.com/images/mgl/7MvL6/s1/2020-lamborghini-aventador-svj-roadster.jpg" alt="" />
      </div>
      <div className="hero-text text-white ms-5">
        <h1 className="pay-title">Payment System Coming Soon</h1>
      </div>
    </div>
  );
};

export default Pay;