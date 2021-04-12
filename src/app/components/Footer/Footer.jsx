import React from "react";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  NavDropdown,
  Button,
} from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="d-flex d-flex justify-content-around pb-5">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Active</Nav.Link>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav>

        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Active</Nav.Link>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav>

        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Active</Nav.Link>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default Footer;
