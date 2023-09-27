import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const BasketItem = () => {
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
        <Button variant="secondary">
          <RiDeleteBin6Line />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BasketItem;
