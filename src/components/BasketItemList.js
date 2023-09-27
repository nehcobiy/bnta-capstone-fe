import { BasketContext } from "../contexts/BasketContext";
import BasketItem from "./BasketItem";

const BasketItemList = (item) => {
  const { basket, setBasket } = useContext(BasketContext);

  const basketComponents = item.map((product) => {
    return <BasketItem key={item.id} product={product} />;
  });

  return <>{basketComponents}</>;
};

export default BasketItemList;
