import { useContext } from "react";
import { BasketContext } from "../contexts/BasketContext";
import BasketItem from "./BasketItem";

const BasketItemList = (item) => {
  const { basket, setBasket } = useContext(BasketContext);

  const basketItemComponents = basket.map((product) => {
    return <BasketItem key={item.id} product={product} />;
  });

  return <>{basketItemComponents}</>;
};

export default BasketItemList;
