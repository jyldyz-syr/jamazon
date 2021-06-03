import React from "react";
import {
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
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
      ></img>

      <Nav className="mr-auto">
        <Nav.Link href="/all-categories">All Categories</Nav.Link>
        <Nav.Link href="https://github.com/jyldyz-syr/jamazon">Front</Nav.Link>
        <Nav.Link href="https://github.com/jyldyz-syr/jamazon-back">
          Back
        </Nav.Link>
        <Nav.Link href="https://itbook.store/">API</Nav.Link>
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
