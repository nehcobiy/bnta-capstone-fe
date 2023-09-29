import { useState, useContext, useEffect } from "react";
import { BasketContext } from "../contexts/BasketContext";
import { UserContext } from "../contexts/UserContext";
import { Button } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import BasketItemList from "./BasketItemList";

const Basket = () => {
  const [show, setShow] = useState(false);
  const { basket, setBasket } = useContext(BasketContext);
  const { user } = useContext(UserContext);
  const [shipping, setShipping] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [checkedOut, setCheckedOut] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCheckedOut(false);
  };

  const handleShow = () => setShow(true);

  const handleCheckout = () => {
    const products = {};

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

  useEffect(() => {
    let total = 0;
    basket.forEach((basketItem) => {
      total += basketItem.item.price * basketItem.quantity;
    });

    setCartTotal(total);
  }, [basket]);

  const updateShipping = (e) => {
    setShipping(e.target.value);
  };

  return (
    <>
      <Button variant="light" size="lg" onClick={handleShow}>
        <BsCart />
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title as="h2">Shopping Basket</Offcanvas.Title>
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body>
          <p hidden={checkedOut != true}>Confirmation: order placed</p>
          <BasketItemList />
          <Form>
            <Form.Label>Delivery: </Form.Label>
            <Form.Select defaultValue="Choose..." onChange={updateShipping}>
              <option>Choose...</option>
              <option value={295}>Standard Delivery: £2.95 </option>
              <option value={395}>Royal Mail Tracked48: £3.95</option>
              <option value={495}>Royal Mail Tracked24: £4.95</option>
              <option value={695}>Royal Mail Special Delivery: £6.95</option>
              <option value={650}>DHL Express: £6.50</option>
              <option value={1250}>DHL International: £12.50</option>
            </Form.Select>
            <Form.Label>Address: </Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>{user != null ? user.address : null}</option>
            </Form.Select>
          </Form>
          <hr />
          <p>Cart total: £{(cartTotal / 100).toFixed(2)}</p>
          <p>Shipping: £{(shipping / 100).toFixed(2)}</p>
          <p>Subtotal: £{(cartTotal / 100 + shipping / 100).toFixed(2)} </p>
        </Offcanvas.Body>
        <Button variant="light" size="lg" onClick={handleCheckout}>
          Checkout
        </Button>
      </Offcanvas>
    </>
  );
};

export default Basket;
