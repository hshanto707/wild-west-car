import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
// import useAuth from "../../../hooks/useAuth";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <Navbar
        className="navbar"
        collapseOnSelect
        expand="lg"
      >
        <Container className="navbar-container d-flex justify-content-between">
          <div>
          <NavLink
            className="logo my-2 d-flex align-items-center justify-content-center"
            style={{ width: "260px" }}
            to="/"
          >
            <span className="logo-text">Wild West Cars</span>
          </NavLink>
          <Navbar.Toggle
            style={{ color: "white" }}
            aria-controls="navbarScroll"
          />
          </div>
          <NavbarCollapse className="navbar-items align-items-center">
            <NavLink className="nav-item ms-sm-5" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item ms-sm-5" to="/all-cars">
              All Cars
            </NavLink>
            {user.email ? (
              <div className="login-info d-flex align-items-center ms-sm-5">
                <NavLink className="nav-item ms-sm-3" to="/dashboard">
                  Dashboard
                </NavLink>
                {
                  <span
                    className="text-white fw-bold ms-sm-5"
                    style={{ fontSize: "19px", marginTop: "-5px" }}
                  >
                    Hello {user.displayName}
                  </span>
                }
                <Button
                  className="button-light ms-sm-5"
                  onClick={logout}
                >
                  Log Out
                  <FontAwesomeIcon className="ms-2" icon={faUser} />
                </Button>
              </div>
            ) : (
              <NavLink className="ms-sm-5" to="/login">
                <Button className="button-light">
                  Log In
                  <FontAwesomeIcon className="ms-2" icon={faUser} />
                </Button>
              </NavLink>
            )}
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
