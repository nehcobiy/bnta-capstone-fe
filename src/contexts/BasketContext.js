// Importing necessary modules from React
import { createContext, useState } from "react";

// Create a new context for managing the shopping basket
export const BasketContext = createContext();

// The BasketProvider component provides the shopping basket context to its children
export const BasketProvider = ({ children }) => {
  // State variable to store the items in the shopping basket
  const [basket, setBasket] = useState([]);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {/* Provide the basket state and setBasket function to the children */}
      {children}
    </BasketContext.Provider>
  );
};
