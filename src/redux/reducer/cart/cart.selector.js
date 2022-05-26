import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
export const selectCartItems = createSelector(
  selectCart,
  (cart) => cart.CartItems
);
export const selectcartCount = createSelector(selectCartItems, (cartitems) =>
  cartitems.reduce(
    (accumalatedQuantity, cartitem) => accumalatedQuantity + cartitem.quantity,
    0
  )
);
export const selectHidden = createSelector(selectCart, (cart) => cart.hidden);
export const selectTotalPrice = createSelector(selectCartItems, (itemsCart) =>
  itemsCart.reduce(
    (accumalatedQuantity, eachitemsCart) =>
      accumalatedQuantity + eachitemsCart.quantity * eachitemsCart.price,
    0
  )
);
