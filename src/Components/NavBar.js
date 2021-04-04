import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Navbar expand="md" bg="dark" variant="dark">
        <Navbar.Brand className="text-uppercase font-weight-bolder">
          Phone Repair plus and Vapes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="font-weight-bolder ">
            <NavLink
              to="/"
              exact
              className=" nav-link"
              activeStyle={{
                textDecoration: "underline",
                color: "#fff",
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className=" nav-link"
              activeStyle={{
                textDecoration: "underline",
                color: "#fff",
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/Services"
              className=" nav-link"
              activeStyle={{
                textDecoration: "underline",
                color: "#fff",
              }}
            >
              Services
            </NavLink>
            <NavLink
              to="/Contact"
              className=" nav-link"
              activeStyle={{
                textDecoration: "underline",
                color: "#fff",
              }}
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Nav.Item className="nav-link font-weight-bold text-light">
                    <h5 style={{ width: "15ch" }}>
                        
                    </h5>
                </Nav.Item>
                <Nav className="font-weight-bolder ">
                    <NavLink
                        to="/"
                        exact
                        className=" nav-link"
                        activeClassName="selected "
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/About"
                        className=" nav-link"
                        activeClassName="selected "
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/Services"
                        className=" nav-link"
                        activeClassName="selected "
                    >
                        Services
                    </NavLink>
                    <NavLink to="/Contact" className=" nav-link">
                        Contact
                    </NavLink>
                </Nav>
            </Navbar> */}
    </>
  );
}
