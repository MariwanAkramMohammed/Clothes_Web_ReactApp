import React from "react";
import { Route, Routes } from "react-router-dom";
import "./shoppage.style.scss";
import Collection from "../Collection/Collection.component";
import CollectionOverview from "../../Components/collectionpreview/collectionOverview.component";
const ShopPage = () => (
  <div className="shop_page">
    <Routes>
      <Route path="" element={<CollectionOverview />} />
      <Route path=":id" element={<Collection/>}/>
    </Routes>
  </div>
);

export default ShopPage;
