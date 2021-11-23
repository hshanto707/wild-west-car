import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Navbar, Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import "./Header.css";
// import useAuth from "../../../hooks/useAuth";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
        <Container className="w-100">
          <div className="d-flex justify-content-between">
            <div>
              <NavLink
                className="logo my-2 d-flex justify-content-start"
                to="/"
              >
                <img
                  src="https://i.imgur.com/UrCwtMQ.png"
                  alt=""
                  className="logo-img me-2"
                />
                <span className="logo-text">Wild West Cars</span>
              </NavLink>
            </div>
            <div className="ms-auto">
              <Navbar.Toggle aria-controls="navbarScroll" />
            </div>
          </div>
          <NavbarCollapse className="mx-auto navbar-items align-items-center">
            <Nav className="ms-auto align-items-center">
              <NavLink className="nav-item ms-sm-3" to="/">
                Home
              </NavLink>
              <NavLink className="nav-item ms-sm-3" to="/all-cars">
                All Cars
              </NavLink>
              <NavHashLink className="nav-item ms-sm-3" to="/#review-section">
                Reviews
              </NavHashLink>
              <NavHashLink className="nav-item ms-sm-3" to="/#contact-section">
                Contact
              </NavHashLink>
              {user.email ? (
                <div className="login-info d-flex align-items-center">
                  <NavLink className="nav-item ms-sm-3" to="/dashboard">
                    Dashboard
                  </NavLink>
                  <Button
                    className="button-light ms-sm-5"
                    style={{ width: "185px" }}
                    onClick={logout}
                  >
                    Log Out
                    <FontAwesomeIcon className="ms-2" icon={faUser} />
                  </Button>
                </div>
              ) : (
                <NavLink className="ms-sm-5" to="/login">
                  <Button className="button-light" style={{ width: "185px" }}>
                    Log In
                    <FontAwesomeIcon className="ms-2" icon={faUser} />
                  </Button>
                </NavLink>
              )}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
