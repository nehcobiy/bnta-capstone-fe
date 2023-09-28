// Importing necessary modules and components from external files
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";

// The ProductsContainer component displays a list of products based on the selected category
const ProductsContainer = () => {
  // Extracting the category parameter from the URL using useParams
  let { category } = useParams();
  
  // State variable to store products of the selected category
  const [productsByCategory, setProductsByCategory] = useState([]);

  // useEffect hook to fetch products when the component mounts or when the category changes
  useEffect(() => {
    // Fetch products based on the selected category
    fetch(`http://localhost:8080/products?category=${category}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // Update the productsByCategory state with the fetched data
        setProductsByCategory(response);
      });
  }, [category]);

  return (
    <>
      <h2>{category[0].toUpperCase() + category.slice(1)}</h2>
      {/* Render the ProductList component with products from the selected category */}
      <ProductList productsByCategory={productsByCategory} />
    </>
  );
};

// Exporting the ProductsContainer component
export default ProductsContainer;
