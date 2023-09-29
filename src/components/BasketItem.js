import { useState, useContext } from "react";
import { BasketContext } from "../contexts/BasketContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BasketItem = ({ product }) => {
  const { basket, setBasket } = useContext(BasketContext);

  const handlePlus = () => {
    // Create a new basket array with the quantity of the selected product incremented
    const updatedBasket = basket.map((basketItem) => {
      if (basketItem.item.id === product.item.id) {
        basketItem.quantity += 1;
      }
      return basketItem;
    });

    setBasket(updatedBasket);
  };

  const handleMinus = () => {
    let updatedBasket;
    if (product.quantity > 1) {
      updatedBasket = basket.map((basketItem) => {
        if (basketItem.item.id === product.item.id) {
          basketItem.quantity -= 1;
        }
        return basketItem;
      });
    }
    setBasket(updatedBasket);
  };

  const handleBin = () => {
    const updatedBasket = basket.filter((basketItem) => {
      return basketItem !== product;
    });

    setBasket(updatedBasket);
  };

  return (
    <>
      <Card style={{ width: "12rem" }}>
        <Card.Img variant="top" src={product.item.image} />
        <Card.Body>
          <Card.Title>{product.item.name}</Card.Title>
          <Card.Text>£{product.item.price / 100}</Card.Text>
          <p>Qty:</p>
          <Button variant="light" size="sm" onClick={handlePlus}>
            <AiOutlinePlus />
          </Button>
          {product.quantity}
          <Button
            variant="light"
            size="sm"
            onClick={handleMinus}
            disabled={product.quantity === 1}
          >
            <AiOutlineMinus />
          </Button>

          <Button variant="secondary" onClick={handleBin}>
            <RiDeleteBin6Line />
          </Button>
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

export default BasketItem;
