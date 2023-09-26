import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BasketContext } from "../contexts/BasketContext";

const Basket = () => {
  const [show, setShow] = useState(false);
  const { basket, setBasket } = useContext(BasketContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(basket);
  return (
    <>
      <Button variant="light" size="lg" onClick={handleShow}>
        <BsCart />
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Basket</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Products */}

          {/* Form */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Basket;
