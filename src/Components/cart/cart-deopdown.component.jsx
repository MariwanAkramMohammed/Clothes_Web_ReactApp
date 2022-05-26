import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import "./cart-deopdown.style.scss";

import CartItem from "../cartItem/cartItem.component";
import CustomButton from "../costum-button/custom-button.component";
import { selectCartItems } from "../../redux/reducer/cart/cart.selector";
import { cartActionToggle } from "../../redux/reducer/cart/cart.action";

const CardDropdown = ({ cartItem, dispatch }) => {
  const newnavigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItem.length ? (
          cartItem.map((eachItem) => <CartItem item={eachItem} />)
        ) : (
          <span className="empty-string">your cart is empty</span>
        )}
        <CustomButton
          onClick={() => {
            newnavigate("/check");
            dispatch(cartActionToggle());
          }}
        >
          Go To Checkout
        </CustomButton>
      </div>
    </div>
  );
};
const matStateToProps = createStructuredSelector({
  cartItem: selectCartItems,
});
export default connect(matStateToProps)(CardDropdown);
