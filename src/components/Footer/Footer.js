import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-container">
        <div className="text-center text-md-start">
          <h3 className="footer-logo text-white mb-4">
            <img src="https://i.imgur.com/UrCwtMQ.png" alt="" className="logo-img w-50 mb-2 my-auto" />
            </h3>
          <div>
            <Link className="footer-link"><FontAwesomeIcon className="footer-text fs-2 me-3 mt-2" icon={faFacebookSquare} /></Link>
            <Link className="footer-link"><FontAwesomeIcon className="footer-text fs-2 me-3 mt-2" icon={faTwitterSquare} /></Link>
            <Link className="footer-link"><FontAwesomeIcon className="footer-text fs-2 me-3 mt-2" icon={faLinkedin} /></Link>
            <Link className="footer-link"><FontAwesomeIcon className="footer-text fs-2 me-3 mt-2" icon={faInstagramSquare} /></Link>
            <Link className="footer-link"><FontAwesomeIcon className="footer-text fs-2 me-3 mt-2" icon={faYoutubeSquare} /></Link>
          </div>
        </div>
        <div className="footer-section our-location">
          <h3 className="footer-title text-white mb-4">Our Location</h3>
          <div className="our-location-info">
            <div className="text-md-start d-flex">
              <FontAwesomeIcon className="text-white me-2 mt-2" icon={faHome} />
              <p className="footer-text">1730 M St. Suite 501, NYC, <br />New York, 20036 USA</p>
            </div>
            <div className="text-md-start d-flex">
              <FontAwesomeIcon className="text-white me-2 mt-2" icon={faPhone} />
              <p className="footer-text">12-02-0987 6543<br />12-02-3454 2458</p>
            </div>
            <div className="text-md-start d-flex">
              <FontAwesomeIcon className="text-white me-2 mt-1" icon={faEnvelope} />
              <p className="footer-text">hshanto707@gmail.com</p>
            </div>
            <div className="text-md-start d-flex">
              <FontAwesomeIcon className="text-white me-2 mt-1" icon={faGlobe} />
              <p className="footer-text">www.website.com</p>
            </div>
          </div>
        </div>
        <div className="footer-section text-center text-md-start">
          <h3 className="footer-title text-white mb-4">Car Brands</h3>
          <div>
            <Link className="footer-link" to="/"><p className="footer-text">BMW</p></Link>
            <Link className="footer-link" to="/"><p className="footer-text">Ferrari</p></Link>
            <Link className="footer-link" to="/"><p className="footer-text">Lamborghini</p></Link>
            <Link className="footer-link" to="/"><p className="footer-text">Audi</p></Link>
            <Link className="footer-link" to="/"><p className="footer-text">Volvo</p></Link>
            <Link className="footer-link" to="/"><p className="footer-text">Chevrolet</p></Link>
            <Link className="footer-link" to="/"><p className="footer-text">Porsche</p></Link>
            <Link className="footer-link" to="/"><p className="footer-text">Mercedes-Benz</p></Link>
          </div>
        </div>
      </div>
      <p className="footer-text text-center pt-4">Copyright &copy; 2021. <span className="text-white">Wild West Cars.</span> All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
