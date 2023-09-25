import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { BsCart } from "react-icons/bs";

const Product = ({ product }) => {
  //   console.log(product);

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
        <Button variant="primary">
          <BsCart />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
