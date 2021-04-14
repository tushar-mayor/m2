import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Zoom } from "react-reveal";
export default function NavBar() {
    return (
        <>
            <Navbar expand="md" bg="dark" variant="dark">
                <Navbar.Brand className="text-uppercase font-weight-bolder">
                    <Zoom left cascade duration={2000}>
                    Phone Repair plus and Vapes
                    </Zoom>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav bg-success" />
                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="justify-content-end"
                >
                    <Nav className="font-weight-bolder ">
                        <Zoom right>
                        <NavLink
                            to="/"
                            exact
                            className=" nav-link"
                            activeStyle={{
                                textDecoration: "underline",
                                color: "#fff",
                            }}
                        >
                            <Zoom right cascade duration={2000}>
                            Home
                            </Zoom>
                        </NavLink>
                        <NavLink
                            to="/About"
                            className=" nav-link"
                            activeStyle={{
                                textDecoration: "underline",
                                color: "#fff",
                            }}
                        >
                            <Zoom right cascade duration={2000}>
                            About
                            </Zoom>
                        </NavLink>
                        <NavLink
                            to="/Services"
                            className=" nav-link"
                            activeStyle={{
                                textDecoration: "underline",
                                color: "#fff",
                            }}
                        >
                            <Zoom right cascade duration={2000}>
                            Services
                            </Zoom>
                        </NavLink>
                        <NavLink
                            to="/Contact"
                            className=" nav-link"
                            activeStyle={{
                                textDecoration: "underline",
                                color: "#fff",
                            }}
                        >
                            <Zoom right cascade duration={2000}>
                            Contact
                            </Zoom>
                        </NavLink>
                        </Zoom>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
