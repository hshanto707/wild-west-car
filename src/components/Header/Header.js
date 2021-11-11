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
        <Container className="navbar-container">
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
          <NavbarCollapse className="navbar-items ms-auto align-items-center">
            <NavLink className="nav-item ms-sm-5" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item ms-sm-5" to="/all-cars">
              All Cars
            </NavLink>
            <NavLink className="nav-item ms-sm-5" to="/dashboard">
              Dashboard
            </NavLink>
            <NavLink className="nav-item ms-sm-5" to="/login">
              Login
            </NavLink>
            {user.displayName && (
              <NavLink className="nav-item ms-sm-5" to="/my-order">
                My Orders
              </NavLink>
            )}
            {user.displayName && (
              <NavLink className="nav-item ms-sm-5" to="/all-orders">
                All Orders
              </NavLink>
            )}
            {user.displayName && (
              <NavLink className="nav-item ms-sm-5" to="/allorder">
                Add A Tour
              </NavLink>
            )}
            {user.email ? (
              <div className="login-info d-flex align-items-center ms-sm-5">
                {
                  <span
                    className="text-white fw-bold"
                    style={{ fontSize: "19px", marginTop: "-5px" }}
                  >
                    Hello {user.displayName}
                  </span>
                }
                <Button
                  className="login ms-sm-5"
                  onClick={logout}
                >
                  Log Out
                  <FontAwesomeIcon className="ms-2" icon={faUser} />
                </Button>
              </div>
            ) : (
              <NavLink className="ms-sm-5" to="/login">
                <Button className="login">
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
