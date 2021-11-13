import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <img src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2018/bmw-z4-first-edition/bmw-z4-first-edition-stage-teaser-XL.jpg" alt="" />
      </div>
      <div className="hero-text ms-5">
        <h1 className="caption mb-sm-3">Find the Best Deal On Your Dream Car</h1>
        <p className="details mb-sm-3 w-75">We can help you find the best car. Check our reviews, compare models and find cars for sale.</p>
        <NavLink to="/all-cars">
          <Button className="button-dark">View Listings</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
