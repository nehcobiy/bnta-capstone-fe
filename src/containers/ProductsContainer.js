import { useParams } from "react-router-dom";

const ProductsContainer = () => {
  let { category } = useParams();

  console.log(category);
  return <h2>Products</h2>;
};

export default ProductsContainer;
