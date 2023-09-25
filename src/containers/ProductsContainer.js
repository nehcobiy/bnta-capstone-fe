import { useParams } from "react-router-dom";

const ProductsContainer = () => {
  let { category } = useParams();

  return <h2>Products</h2>;
};

export default ProductsContainer;
