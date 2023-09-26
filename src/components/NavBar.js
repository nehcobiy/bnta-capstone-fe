import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiHomeAlt2 } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import Basket from "./Basket";
import { Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <h1>Bamazon</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/products/books">Books</NavDropdown.Item>
              <NavDropdown.Item href="/products/electronics">
                Electronics
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/homeware">
                Homeware
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/media">Media</NavDropdown.Item>
              <NavDropdown.Item href="/products/toys">Toys</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button variant="light" size="lg">
          <GoPerson />
        </Button>
        <Basket />
      </Container>
    </Navbar>
  );
};

export default NavBar;
