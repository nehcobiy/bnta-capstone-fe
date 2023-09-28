// Importing necessary modules and components from external libraries
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

// The NavBar component represents the website's navigation bar
const NavBar = () => {
  // State variable to control the display of the sign-in modal
  const [showSignIn, setShowSignIn] = useState(false);

  // Function to handle a click event to show the sign-in modal
  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  // Function to handle closing the sign-in modal
  const handleCloseModal = () => {
    setShowSignIn(false);
  };

  return (
    // Bootstrap Navbar component
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <h1>Bamazon</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Dropdown menu for product categories */}
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

        {/* Button to open the sign-in modal */}
        <Button variant="light" size="lg" onClick={handleSignInClick}>
          <GoPerson />
        </Button>
        {/* Shopping basket component */}
        <Basket />
      </Container>

      {/* React Bootstrap Modal for sign-in */}
      <Modal show={showSignIn} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Render the sign-in component */}
          <SignIn handleClose={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

// Exporting the NavBar component
export default NavBar;
