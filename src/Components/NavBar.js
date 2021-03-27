import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../logo.svg";

export default function NavBar({ page }) {
  return (
    <>
      <Navbar
        variant="dark"
        bg={`${page !== "home" ? "dark" : ""}`}
        className="d-flex justify-content-lg-between position-sticky"
      >
        <Logo
          style={{ height: "3rem" }}
          fill={`${page !== "home" ? "red" : "yellow"}`}
        />
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
      </Navbar>
    </>
  );
}
