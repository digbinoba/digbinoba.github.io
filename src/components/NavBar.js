import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import logo from "../assets/img/logo.png";
import resume from "../assets/files/Resume.pdf";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [userScrolled, setUserScrolled] = useState(false);
  console.log(userScrolled);
  useEffect(() => {
    const onScroll = () => {
      //Check the length of the window if more than 50,
      // 50 is around the height of our navbar
      if (window.scrollY > 50) {
        setUserScrolled(true);
      } else {
        setUserScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar className={userScrolled ? "userScrolled" : ""} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" height='75' width='
        75'/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className={
                activeLink === "portfolio"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("portfolio")}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <a href={resume} target="_blank">
              <button
                className="vvd"
                onClick={() => console.log("this button was clicked")}
              >
                <span>Resume</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
