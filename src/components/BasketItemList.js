import { useContext } from "react";
import { BasketContext } from "../contexts/BasketContext";
import BasketItem from "./BasketItem";

const BasketItemList = () => {
  const { basket, setBasket } = useContext(BasketContext);

  const basketItemComponents = basket.map((product) => {
    return <BasketItem key={product.item.id} product={product} />;
  });

  return <>{basketItemComponents}</>;
};

export default BasketItemList;
