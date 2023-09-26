import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiHomeAlt2 } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import SignIn from "./SignIn";

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
          <BiHomeAlt2 />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <h2>Bamazon</h2>
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
        <button onClick={handleSignInClick}>
          <GoPerson />
        </button>
        <button>
          <BsCart />
        </button>
      </Container>
     
     {/* SignIn Modal */}
      {/* React Bootstrap Modal */}
      <Modal show={showSignIn} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignIn handleClose={handleCloseModal} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </Navbar>
  );
};

export default NavBar;
