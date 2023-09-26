import React, { useState, useEffect } from "react";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import Product from "../components/Product";

const HomeContainer = () => {
  const [products, setProducts] = useState([]);

  const fetchRandomProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/products/random/9"); // Assuming your API supports a random products endpoint that returns 9 random products
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching random products:", error);
    }
  };

  useEffect(() => {
    fetchRandomProducts();
  }, []);

  return (
    <>
      <div>
        <HeroImage />
        <br />
        <h1>Popular Products</h1>
        <div className="product-list">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomeContainer;
