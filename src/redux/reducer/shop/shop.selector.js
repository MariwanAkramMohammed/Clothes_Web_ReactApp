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
  (collections) => Object.keys(collections).map((key) => collections[key])
);
export const selectCollectionItem = (RouteParams) =>
  createSelector(
    [selectCollection],
    (collection) => collection[RouteParams]
    //retrn one singel array element true to function
  );
