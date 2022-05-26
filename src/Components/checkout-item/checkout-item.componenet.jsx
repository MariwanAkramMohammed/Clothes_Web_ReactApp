import React from "react";
import { connect } from "react-redux";
import {
  CLEARE_ITEMACTION,
  Add_item,
  RemoveItem,
} from "../../redux/reducer/cart/cart.action";
import "./checkout-item.style.scss";
const CheckoutItem = ({ cartItem, cleareItema, AddItem, RemoveItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      
      <span className="quantity">
        <div className="arrow" onClick={() => RemoveItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => AddItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button " onClick={() => cleareItema(cartItem)}>
        &#10008;
      </div>
    </div>
  );
};
const maptodispatch = (dispatch) => ({
  cleareItema: (item) => dispatch(CLEARE_ITEMACTION(item)),
  AddItem: (item) => dispatch(Add_item(item)),
  RemoveItem: (item) => dispatch(RemoveItem(item)),
});

export default connect(null, maptodispatch)(CheckoutItem);
