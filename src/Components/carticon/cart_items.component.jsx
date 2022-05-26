import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./cart_items.style.scss";
import { cartActionToggle } from "../../redux/reducer/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectcartCount } from "../../redux/reducer/cart/cart.selector";

const CartIcon = ({ TOGGLEHIDDEN, CartItemsCount }) => (
  <div className="cart-icon" onClick={TOGGLEHIDDEN}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{CartItemsCount}</span>
  </div>
);
const mapDispatchToProps = (dipatch) => ({     
  TOGGLEHIDDEN: () => {
    dipatch(cartActionToggle());
  },
});
const matStateToProps = createStructuredSelector({
  CartItemsCount: selectcartCount,
});
export default connect(matStateToProps, mapDispatchToProps)(CartIcon);
