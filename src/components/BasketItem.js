import { useState, useContext } from "react";
import { BasketContext } from "../contexts/BasketContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BasketItem = ({ product }) => {
  // const [quantity, setQuantity] = useState(product.quantity);
  const { basket, setBasket } = useContext(BasketContext);

  const handlePlus = () => {
    // setQuantity(quantity + 1);
    console.log(basket);
    console.log(product);
    const updatedBasket = basket.map((basketItem) => {
      if (basketItem.item.id == product.item.id) {
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
        if (basketItem.item.id == product.item.id) {
          basketItem.quantity -= 1;
        }
        return basketItem;
      });
    }
    setBasket(updatedBasket);
  };

  const handleBin = () => {
    const updatedBasket = basket.filter((basketItem) => {
      return basketItem != product;
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
          {/* QUANTITY */}
          <p>Qty:</p>
          <Button variant="light" size="sm" onClick={handlePlus}>
            <AiOutlinePlus />
          </Button>
          {product.quantity}
          <Button variant="light" size="sm" onClick={handleMinus}>
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
