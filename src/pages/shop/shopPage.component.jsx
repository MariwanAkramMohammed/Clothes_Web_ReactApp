import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import "./shoppage.style.scss";
import Collection from "../Collection/Collection.component";
import CollectionOverview from "../../Components/collectionpreview/collectionOverview.component";
import { db } from "../../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { ConvertcollectionToMapAarray } from "../../firebase/firebase";
import { ShopUpdateAction } from "../../redux/reducer/shop/shopaction";
import { selectCollectionLoaded } from "../../redux/reducer/shop/shop.selector";

import WithSpinner from "../../Components/with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";

const CollectionOverview_WithSpinner = (props) => {
  const { isLoading, ...other } = props;
  return WithSpinner(CollectionOverview)({ isLoading, ...other });
};
const Collection_WithSpinner = (props) => {
  const { isLoading, ...other } = props;
  return WithSpinner(Collection)({ isLoading, ...other });
};

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    const { UpdateShopData } = this.props;
    const ColRef = collection(db, "collection");
    //there is three way to get data from backend database
    //1 via use firestore functon
    onSnapshot(ColRef, async (snapshotData) => {
      const collectionmap = ConvertcollectionToMapAarray(snapshotData);
      UpdateShopData(collectionmap);
      this.setState({ isLoading: false });
    });
    // 2 by fetching pattern with url to get data
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/dbclothes-75090/databases/(default)/documents/collection"
    // )
    //   .then((response) => response.json())
    //   .then((collection) => console.log(collection));
    //by use get method to get data
    // ColRef.get().then(
    //   snapshotData => {
    //       const collectionmap = ConvertcollectionToMapAarray(snapshotData);
    //       UpdateShopData(collectionmap);
    //       this.setState({ isLoading: false });
    //     }
    // )
  }
  render() {
    const { isLoading } = this.state;
    const { isloaded } = this.props;
    console.log(isloaded);
    return (
      <div className="shop_page">
        <Routes>
          <Route
            path=""
            element={<CollectionOverview_WithSpinner isLoading={isLoading} />}
          />
          <Route
            path=":id"
            element={<Collection_WithSpinner isLoading={isLoading} />}
          />
        </Routes>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  UpdateShopData: (collection) => dispatch(ShopUpdateAction(collection)),
});
const map = createStructuredSelector({
  isloaded: selectCollectionLoaded,
});

export default connect(map, mapDispatchToProps)(ShopPage);
