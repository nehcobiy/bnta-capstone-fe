import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { BsCart } from "react-icons/bs";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { BasketContext } from "../contexts/BasketContext";

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { basket, setBasket } = useContext(BasketContext);

  console.log(basket);

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToBasket = () => {
    if (product.length === 0) {
      setBasket([{ item: product, quantity: quantity }]);
    } else {
      basket.forEach((basketItem) => {
        if (basketItem.item.id === product.id) {
          basketItem.quantity += quantity;
          setBasket([...basket]);
        }
      });
    }
    // if (basket.hasOwnProperty(product.id)) {
    //   basket[product.id] += quantity;
    //   setBasket({ ...basket });
    // } else {
    //   basket[product.id] = quantity;
    //   setBasket({ ...basket });
    // }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>More information...</Accordion.Header>
              <Accordion.Body>{product.description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Text>
        <Card.Text>£{product.price / 100}</Card.Text>
        {/* QUANTITY */}
        <p>Qty:</p>
        <Button variant="light" size="sm" onClick={handlePlus}>
          <AiOutlinePlus />
        </Button>
        {quantity}
        <Button variant="light" size="sm" onClick={handleMinus}>
          <AiOutlineMinus />
        </Button>
        <Button variant="secondary" onClick={addToBasket}>
          <BsCart />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
