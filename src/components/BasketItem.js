// Importing necessary modules and components from external libraries and contexts
import { useState, useContext } from "react";
import { BasketContext } from "../contexts/BasketContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// The BasketItem component represents an individual item in the shopping basket
const BasketItem = ({ product }) => {
  // Accessing the shopping basket and its setter function from context
  const { basket, setBasket } = useContext(BasketContext);

  // Function to handle increasing the quantity of the item in the basket
  const handlePlus = () => {
    // Create a new basket array with the quantity of the selected product incremented
    const updatedBasket = basket.map((basketItem) => {
      if (basketItem.item.id === product.item.id) {
        basketItem.quantity += 1;
      }
      return basketItem;
    });

    // Update the basket with the new array
    setBasket(updatedBasket);
  };

  // Function to handle decreasing the quantity of the item in the basket
  const handleMinus = () => {
    let updatedBasket;
    // Check if the item quantity is greater than 1 before decrementing
    if (product.quantity > 1) {
      updatedBasket = basket.map((basketItem) => {
        if (basketItem.item.id === product.item.id) {
          basketItem.quantity -= 1;
        }
        return basketItem;
      });
    }
    // Update the basket with the new array (or remain unchanged if quantity was 1)
    setBasket(updatedBasket);
  };

  // Function to remove the item from the basket
  const handleBin = () => {
    // Create a new basket array without the selected product
    const updatedBasket = basket.filter((basketItem) => {
      return basketItem !== product;
    });

    // Update the basket with the new array (item is removed)
    setBasket(updatedBasket);
  };

  return (
    <>
      {/* Display the product details in a card */}
      <Card style={{ width: "12rem" }}>
        <Card.Img variant="top" src={product.item.image} />
        <Card.Body>
          <Card.Title>{product.item.name}</Card.Title>
          <Card.Text>£{product.item.price / 100}</Card.Text>
          {/* Display item quantity and buttons to adjust it */}
          <p>Qty:</p>
          <Button variant="light" size="sm" onClick={handleMinus}>
            <AiOutlineMinus />
          </Button>
          {product.quantity}
          <Button variant="light" size="sm" onClick={handlePlus}>
            <AiOutlinePlus />
          </Button>
          {/* Button to remove the item from the basket */}
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
