// Importing the Product component and Row from external libraries
import Product from "./Product";
import Row from "react-bootstrap/Row";

// The ProductList component represents a list of products displayed in a row
const ProductList = ({ productsByCategory }) => {
  // Map through the products and create Product components for each
  const productComponents = productsByCategory.map((product) => {
    // Assign a unique key to each Product component based on the product's ID
    return <Product key={product.id} product={product} />;
  });

  return (
    <>
      {/* Display the Product components in a row with a maximum of 5 columns */}
      <Row lg={5} className="mx-1">
        {productComponents}
      </Row>
    </>
  );
};

// Exporting the ProductList component
export default ProductList;
