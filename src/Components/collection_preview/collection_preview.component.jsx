import React from "react";
import { connect } from "react-redux";
import "./collection_preview.scss";
import CollectionItem from "../collectionItem/collectionItem.component";
import { Add_item } from "../../redux/reducer/cart/cart.action";
const CollenctionPreview = ({ title, items, AddItem }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} AddItem={AddItem} />
          ))}
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  AddItem: (item) => dispatch(Add_item(item)),
});
export default connect(null, mapDispatchToProps)(CollenctionPreview);
