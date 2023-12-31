import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { GoPerson } from "react-icons/go";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import SignIn from "./SignIn";
import Basket from "./Basket";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleCloseModal = () => {
    setShowSignIn(false);
  };

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
              <NavDropdown.Item as={Link} to="/products/books">
                Books
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/electronics">
                Electronics
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/homeware">
                Homeware
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/media">
                Media
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/toys">
                Toys
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <Button variant="light" size="lg" onClick={handleSignInClick}>
          <GoPerson />
        </Button>
        <Basket />
      </Container>

      <Modal show={showSignIn} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignIn handleClose={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

export default NavBar;
