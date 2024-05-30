import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import {Link,NavLink } from "react-router-dom";
import "../../assets/Styles/header.css";
import logo from "../../assets/images/logo.png";
function OffcanvasExample() {
  // Render only the second Navbar without mapping
  const expand = "sm"; // Set the desired expand size here

  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        className="bg-body-tertiary navbar"
      >
        <Container fluid>
          <Navbar.Brand Link="#">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                  exact
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="nav-link"
                  activeClassName="active"
                >
                  About
                </NavLink>
                <NavLink
                  to="/team"
                  className="nav-link"
                  activeClassName="active"
                >
                  Team
                </NavLink>
                <NavLink
                  to="/event"
                  className="nav-link"
                  activeClassName="active"
                >
                  Event
                </NavLink>
                <NavLink
                  to="/client"
                  className="nav-link"
                  activeClassName="active"
                >
                  Client
                </NavLink>
                <NavLink
                  to="/books"
                  className="nav-link"
                  activeClassName="active"
                >
                  Books
                </NavLink>
              </Nav>
              <div className="login-btn">
                <Link to="/login">
                <button className="btn">Login</button>
                </Link>
                <Link to="/register">
                <button className="btn">Register</button></Link>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
