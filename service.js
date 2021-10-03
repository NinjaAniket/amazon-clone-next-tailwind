import { addToBasket } from "./src/slices/basketSlice";

export const addToCart = (product, dispatch) => {
  dispatch(addToBasket(product));
};
