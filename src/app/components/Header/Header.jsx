import React from "react";
import {
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import { Person, Cart } from "react-bootstrap-icons";
import logo from "../../../images/logo1.png";

const Header = () => {
  return (
    <Navbar
      style={{ paddingTop: "2%", paddingBottom: "2%", fontSize: "17px" }}
      size="lg"
      bg="white"
      variant="light"
    >

      <img
        src={logo}
        style={{ width: "10%", height: "10%", paddingLeft: "5px" }}
        href="/"
      ></img>

      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/all-categories">All Categories</Nav.Link>
        <NavDropdown title="Categories" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/categories">Category Page</NavDropdown.Item>
          <NavDropdown.Item href="/product">Product Page</NavDropdown.Item>
          <NavDropdown.Item href="/">Home</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>

      <Person className="ml-3" color="grey" size={30} />

      <Cart className="ml-3" color="grey" size={30} />
    </Navbar>
  );
};

export default Header;
