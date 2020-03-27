import React from "react";
import { Navbar, Image, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import classes from "./Navbar.module.css";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className={classes.Navbar}
    >
      <Navbar.Brand>
        <Image
          src={logo}
          className={classes.NavBarImage}
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavItem className={classes.NavbarItem}>
            <Link to="/">Dashboard</Link>
          </NavItem>
          <NavItem className={classes.NavbarItem}>
            <Link to="/add">Add</Link>
          </NavItem>
          <NavItem className={classes.NavbarItem}>
            <Link to="/search">Search</Link>
          </NavItem>
          <NavItem className={classes.NavbarItem}>
            <Link to="/capital">Capital</Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
