// Importing necessary module and components from external libraries and contexts
import { useContext } from "react";
import { BasketContext } from "../contexts/BasketContext";
import BasketItem from "./BasketItem";

// The BasketItemList component represents a list of items in the shopping basket
const BasketItemList = () => {
  // Accessing the shopping basket and its setter function from context
  const { basket, setBasket } = useContext(BasketContext);

  // Map through the items in the basket and create BasketItem components for each
  const basketItemComponents = basket.map((product) => {
    // Assign a unique key to each BasketItem component based on the product's ID
    return <BasketItem key={product.item.id} product={product} />;
  });

  // Render all the BasketItem components within a fragment
  return <>{basketItemComponents}</>;
};

export default BasketItemList;

