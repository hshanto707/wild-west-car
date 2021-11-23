import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-us w-100" id="contact-section">
      <div className="container my-5">
        <h1 className="main-caption text-white mb-5">Contact us</h1>
        <form>
          <div className="row">
            <div className="mb-3 d-sm-flex">
              <div className="col me-sm-3 mb-3 mb-md-0">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div class="form-group">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder="Write Your Message"
              ></textarea>
            </div>
          </div>
          <Button className="mt-3 button-light d-block contact-button px-5" type="reset">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;