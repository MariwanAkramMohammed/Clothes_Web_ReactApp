export const AddItemToCart = (CartItems, newItemToAdd) => {
  const existItem = CartItems.find(
    (eachItem) => eachItem.id === newItemToAdd.id
  );
  if (existItem) {
    return CartItems.map((eachItem) =>
      eachItem.id === newItemToAdd.id
        ? { ...eachItem, quantity: eachItem.quantity + 1 }
        : eachItem
    );
  } else {
    return [...CartItems, { ...newItemToAdd, quantity: 1 }];
  }
};
export const RemoveItemFromCart = (exCartItem, ItemtoRemove) => {
  const existitem = exCartItem.find(
    (CartItem) => CartItem.id == ItemtoRemove.id
  );
  if (existitem.quantity == 1) {
    return exCartItem.filter((eachItem) => eachItem.id != ItemtoRemove.id);
  } else {
    return exCartItem.map((item) =>
      item.id == ItemtoRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};
