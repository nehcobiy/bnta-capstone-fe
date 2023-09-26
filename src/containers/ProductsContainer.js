import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";

const ProductsContainer = () => {
  let { category } = useParams();
  const [productsByCategory, setProductsByCategory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/products?category=${category}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setProductsByCategory(response);
      });
  }, []);

  return (
    <>
      <h2>Products</h2>
      <ProductList productsByCategory={productsByCategory} />
    </>
  );
};

export default ProductsContainer;
