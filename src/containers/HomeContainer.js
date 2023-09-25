import { useState, useEffect } from "react";
import HeroImage from "../components/HeroImage";

const HomeContainer = () => {

  const [products, setProducts] = useState([]);

  const fetchProductImages = async () => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json()
    setProducts(data);
    console.log(data);
  }

  useEffect(() => {
    fetchProductImages();
  }, [])
  
  return (
    <>
  
      <div>
      <HeroImage />
      </div>
    </>
)};

export default HomeContainer;
