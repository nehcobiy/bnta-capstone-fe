import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";

import { BsCart } from "react-icons/bs";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { BasketContext } from "../contexts/BasketContext";

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { basket, setBasket } = useContext(BasketContext);

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToBasket = () => {
    let itemInBasket = false;

    basket.forEach((basketItem) => {
      if (basketItem.item === product) {
        itemInBasket = true;
      }
    });

    if (basket.length === 0) {
      setBasket([{ item: product, quantity: quantity }]);
    } else if (itemInBasket === true) {
      basket.forEach((basketItem) => {
        if (basketItem.item.id === product.id) {
          basketItem.quantity += quantity;
          setBasket([...basket]);
        }
      });
    } else if (itemInBasket === false) {
      setBasket([...basket, { item: product, quantity: quantity }]);
    }
  };

  return (
    <>

      <Col className="d-flex py-3">
        <Card style={{ width: "22rem" }}>
          <Card.Img className="product-image" variant="top" src={product.image} />

          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text tag="div">£{product.price / 100}</Card.Text>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>More information...</Accordion.Header>
                <Accordion.Body>{product.description}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {/* QUANTITY */}
            <section style={{ display: "flex", marginTop: "20px" }}>
              <p style={{ marginTop: "10px" }}>Qty:</p>
              <Button
                variant="light"
                size="sm"
                onClick={handlePlus}
                style={{ marginLeft: "20px", marginRight: "20px" }}
              >
                <AiOutlinePlus />
              </Button>
              <p style={{ marginTop: "10px" }}>{quantity}</p>
              <Button
                variant="light"
                size="sm"
                onClick={handleMinus}
                style={{ marginLeft: "20px", marginRight: "20px" }}
              >
                <AiOutlineMinus />
              </Button>
              <Button variant="secondary" onClick={addToBasket}>
                <BsCart />
              </Button>
            </section>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Product;
