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

const Header = () => {
  return (
    <Navbar
      style={{ paddingTop: "2%", paddingBottom: "2%", fontSize: "17px" }}
      size="lg"
      bg="white"
      variant="light"
    >
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about-us">About Us</Nav.Link>
        <NavDropdown title="Categories" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Category1</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Category2</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Category3</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Cart className="mr-4" color="grey" size={30} />

      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>

      <Person className="ml-3" color="grey" size={30} />
    </Navbar>
  );
};

export default Header;
