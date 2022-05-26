import { cartActiontype } from "./cart.type";

export const cartActionToggle = () => ({
  type: cartActiontype.TOGGLE_CART_HIDDEN,
});
export const Add_item = (item) => ({
  type: cartActiontype.ADD_ITME,
  payload: item,
});
export const CLEARE_ITEMACTION = (item) => ({
  type: cartActiontype.CLEARE_CART_ITEM,
  payload: item,
});

export const RemoveItem = (item) => ({
  type: cartActiontype.REMOVE_ITEM,
  payload: item,
});
