import { useState, useContext, useEffect } from "react";
import { BasketContext } from "../contexts/BasketContext";
import { UserContext } from "../contexts/UserContext";
import { Button } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import BasketItemList from "./BasketItemList";

// The Basket component represents the shopping basket/cart
const Basket = () => {
  // State variables for controlling the visibility of the shopping cart overlay
  const [show, setShow] = useState(false);

  // Accessing the shopping basket and user information from context
  const { basket, setBasket } = useContext(BasketContext);
  const { user } = useContext(UserContext);

  // State variables to manage shipping cost, cart total, and checkout status
  const [shipping, setShipping] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [checkedOut, setCheckedOut] = useState(false);

  // Function to close the shopping cart overlay
  const handleClose = () => {
    setShow(false);
    setCheckedOut(false);
  };

  // Function to show the shopping cart overlay
  const handleShow = () => setShow(true);

  // Function to handle the checkout process
  const handleCheckout = () => {
    // Create an object to represent the products in the cart
    const products = {};

    // Loop through each item in the basket and populate the products object
    basket.forEach((basketItem) => {
      products[basketItem.item.id] = basketItem.quantity;
    });

    // Send a POST request to a server endpoint to place the order
    fetch("http://localhost:8080/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerId: user.id, products: products }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // Update the user's orders and clear the shopping basket
        user.orders.push(response);
        setBasket([]);
        setCheckedOut(true);
      });
  };

  // Calculate the cart total when the basket changes
  useEffect(() => {
    let total = 0;

    // Calculate the total price by summing up the prices of items in the basket
    basket.forEach((basketItem) => {
      total += basketItem.item.price * basketItem.quantity;
    });

    setCartTotal(total);
  }, [basket]);

  // Function to update the selected shipping option
  const updateShipping = (e) => {
    setShipping(e.target.value);
  };

  // Render the shopping cart and its contents
  return (
    <>
      {/* Button to open the shopping cart */}
      <Button variant="light" size="lg" onClick={handleShow}>
        <BsCart />
      </Button>
      {/* Offcanvas component for displaying the shopping cart */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title as="h2">Shopping Basket</Offcanvas.Title>
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body>
          {/* Display a confirmation message if the checkout is successful */}
          <p hidden={checkedOut != true}>Confirmation: order placed</p>
          {/* Display the list of items in the shopping cart */}
          <BasketItemList />
          {/* Form for selecting delivery options and address */}
          <Form>
            <Form.Label>Delivery: </Form.Label>
            {/* Dropdown for selecting a shipping option */}
            <Form.Select defaultValue="Choose..." onChange={updateShipping}>
              <option>Choose...</option>
              {/* Shipping options with associated costs */}
              <option value={295}>Standard Delivery: £2.95 </option>
              <option value={395}>Royal Mail Tracked48: £3.95</option>
              <option value={495}>Royal Mail Tracked24: £4.95</option>
              <option value={695}>Royal Mail Special Delivery: £6.95</option>
              <option value={650}>DHL Express: £6.50</option>
              <option value={1250}>DHL International: £12.50</option>
            </Form.Select>
            <Form.Label>Address: </Form.Label>
            {/* Dropdown for selecting a user's address */}
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              {/* Display the user's address if available */}
              <option>{user != null ? user.address : null}</option>
            </Form.Select>
          </Form>
          <hr />
          {/* Display the cart total, shipping cost, and subtotal */}
          <p>Cart total: £{(cartTotal / 100).toFixed(2)}</p>
          <p>Shipping: £{(shipping / 100).toFixed(2)}</p>
          <p>Subtotal: £{(cartTotal / 100 + shipping / 100).toFixed(2)} </p>
        </Offcanvas.Body>
        {/* Button to initiate the checkout process */}
        <Button variant="light" size="lg" onClick={handleCheckout}>
          Checkout
        </Button>
      </Offcanvas>
    </>
  );
};

export default Basket;

