import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCollectionItem } from "../../redux/reducer/shop/shop.selector";
import CollectionItem from "../../Components/collectionItem/collectionItem.component";

import "./Collection.style.scss";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
function MapStateToProps(state) {
  const { id } = useParams();
  return { collection: selectCollectionItem(id)(state) };
}
export default connect(MapStateToProps)(Collection);
