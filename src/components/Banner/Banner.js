import React from 'react';
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-bg">
        <img src="https://www.suvdrive.com/sites/default/files/public/45%20angle%20view/45%20angle%20front%20Volvo%20XC90%20T8%20R-Design%202020_5.jpg" alt="" />
      </div>
      <div className="banner-text my-auto">
        <h1>Car-buying Made Simple</h1>
        <h4>Find Your Dream Car In Our Handpicked Car Listing.</h4>
        <p>Instant Price - No Hassle - Home Delivery</p>
        <NavLink to="/all-cars">
          <Button className="button-light">View All Cars</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Banner;