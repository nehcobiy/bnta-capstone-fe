// Importing necessary modules and components
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import ProductsContainer from "./containers/ProductsContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

// The App component represents the main application structure
function App() {
  return (
    <div className="App">
      {/* Render the navigation bar */}
      <NavBar />
      
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<HomeContainer />} />
        {/* Render HomeContainer component for the home page */}
        
        <Route path="/products" element={<ProductsContainer />} />
        {/* Render ProductsContainer component for the products page */}
        
        <Route path="/products/:category" element={<ProductsContainer />} />
        {/* Render ProductsContainer component with category parameter */}
      </Routes>
      
      {/* Render the footer component */}
      <Footer />
    </div>
  );
}

// Exporting the App component
export default App;

