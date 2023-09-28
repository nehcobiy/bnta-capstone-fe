// Importing necessary modules and components from external files
import { useState, useEffect } from "react";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";

// The HomeContainer component represents the home page container
const HomeContainer = () => {
  // State variable to store product data
  const [products, setProducts] = useState([]);

  // Fetching all products from a backend API
  const fetchProductImages = async () => {
    try {
      const response = await fetch("http://localhost:8080/products");
      const data = await response.json();
      
      // Update the products state with the fetched data
      setProducts(data);
      console.log(data);
    } catch (error) {
      // Handle network errors
      console.error("Network error occurred", error);
    }
  };

  // useEffect hook to run the fetchProductImages function when the component mounts
  useEffect(() => {
    fetchProductImages();
  }, []);

  return (
    <>
      <div>
        {/* Render the HeroImage component */}
        <HeroImage />
      </div>
      {/* You may want to render the fetched products or other content here */}
    </>
  );
};

// Exporting the HomeContainer component
export default HomeContainer;
