import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Navbar, Button, Offcanvas, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
// import useAuth from "../../../hooks/useAuth";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
// import useFirebase from "../../../hooks/useFirebase";

const Header = () => {
  // const { user, logOut } = useFirebase();

  return (
    <div>
      <Navbar
        className="navbar"
        variant="dark"
        fixed="top"
        collapseOnSelect
        expand="lg"
      >
        <Container className="navbar-container">
          <NavLink
            className="logo my-3 d-flex align-items-center justify-content-center"
            style={{ width: "260px" }}
            to="/"
          >
            <span className="logo-text ms-2">Wild West Cars</span>
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
            <NavLink className="nav-item ms-sm-5" to="/login">
              Login
            </NavLink>
            {/* {user.displayName && (
              <NavLink className="nav-item ms-sm-5" to="/myorder">
                My Bookings
              </NavLink>
            )}
            {user.displayName && (
              <NavLink className="nav-item ms-sm-5" to="/all-bookings">
                All Bookings
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
                  onClick={logOut}
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
            )} */}
          </NavbarCollapse>
        </Container>
      </Navbar>

      {/* <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink href="#action1"  to="/myorder">Home</NavLink>
                <NavLink href="#action2"  to="/myorder">Link</NavLink>
                {user.displayName && (
                  <NavLink className="nav-item ms-5" to="/myorder">
                    My Tours
                  </NavLink>
                )}
                {user.displayName && (
                  <NavLink className="nav-item ms-5" to="/allorder">
                    All Ordered Tours
                  </NavLink>
                )}
                {user.displayName && (
                  <NavLink className="nav-item ms-5" to="/allorder">
                    Add Tour
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
                      onClick={logOut}
                      style={{ width: "180px" }}
                    >
                      Log Out
                      <FontAwesomeIcon className="ms-2" icon={faUser} />
                    </Button>
                  </div>
                ) : (
                  <NavLink className="ms-sm-5" to="/signin">
                    <Button className="login">
                      Log In
                      <FontAwesomeIcon className="ms-2" icon={faUser} />
                    </Button>
                  </NavLink>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar> */}
    </div>
  );
};

export default Header;
