import { cartActiontype } from "./cart.type";
import { AddItemToCart, RemoveItemFromCart } from "./cart.utils";
const Initial_State = {
  hidden: true,
  CartItems: [],
};
const cartReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case cartActiontype.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActiontype.ADD_ITME:
      return {
        ...state,
        CartItems: AddItemToCart(state.CartItems, action.payload),
      };
    case cartActiontype.REMOVE_ITEM:
      return {
        ...state,
        CartItems: RemoveItemFromCart(state.CartItems, action.payload),
      };
    case cartActiontype.CLEARE_CART_ITEM:
      return {
        ...state,
        CartItems: state.CartItems.filter(
          (item) => item.id != action.payload.id
        ),
      };
    default:
      return state;
  }
};
export default cartReducer;
