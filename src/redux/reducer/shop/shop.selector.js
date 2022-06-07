import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollection = createSelector(
  selectShop,
  (shop) => shop.collections
  //[{},{}]
);

// Object.keys(collectionObject) will return new array and the object key will be array's element
export const selectCollectionForPreview = createSelector(
  selectCollection,
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);
export const selectCollectionItem = (RouteParams) =>
  createSelector(
    [selectCollection],
    (collection) => (collection ? collection[RouteParams] : null)
    //retrn one singel array element true to function
  );
export const selectCollectionLoaded = createSelector(
  selectShop,
  (shop) => shop.collections
);
// with double bang you can get ture or false value of your things
