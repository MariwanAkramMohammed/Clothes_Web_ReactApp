import React from "react";
import CustomButton from "../costum-button/custom-button.component";
import "./collectionItem.style.scss";
const CollectionItem = ({ item, AddItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl} )` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => AddItem(item)} invested>
        ADD TO CARD
      </CustomButton>
    </div>
  );
};
export default CollectionItem;
