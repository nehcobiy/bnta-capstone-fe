import Product from "./Product";
import Row from "react-bootstrap/Row";

const ProductList = ({ productsByCategory }) => {
  const productComponents = productsByCategory.map((product) => {
    return <Product key={product.id} product={product} />;
  });

  return (
    <>
      <Row lg={5} className="mx-1">
        {productComponents}
      </Row>
    </>
  );
};

export default ProductList;
