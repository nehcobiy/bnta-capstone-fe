import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { BsCart } from "react-icons/bs";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const Product = ({ product }) => {
  //   console.log(product);

  const [quantity, setQuantity] = useState(1);

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
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
        <Button variant="light" size="sm" onClick={handlePlus}>
          <AiOutlinePlus />
        </Button>
        <p>Qty: {quantity}</p>
        <Button variant="light" size="sm" onClick={handleMinus}>
          <AiOutlineMinus />
        </Button>
        <Button variant="secondary">
          <BsCart />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
