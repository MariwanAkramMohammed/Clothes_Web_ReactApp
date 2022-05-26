import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collectionOverview.style.scss";
import CollenctionPreview from "../collection_preview/collection_preview.component";
import { selectCollectionForPreview } from "../../redux/reducer/shop/shop.selector";

const CollectionOverview = ({ collections }) => (
  <div className="collection_overview">
    {collections.map(({ id, ...others }) => (
      <CollenctionPreview key={id} {...others} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
