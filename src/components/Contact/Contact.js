import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-us  my-5">
      <div className="container">
        <h1 className="main-caption">Contact us</h1>
        <form>
          <div className="row ">
            <div className="m-3 d-flex">
              <div className="col me-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  class="form-control"
                  placeholder="your email address"
                />
              </div>
            </div>
            <div class="form-group m-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder="Send your feedback"
              ></textarea>
            </div>
          </div>
          <Link>
            <Button className="m-3 btn-success px-5">Send</Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Contact;