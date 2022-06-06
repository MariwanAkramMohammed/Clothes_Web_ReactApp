import shopactionType from "./shopType";

export const ShopUpdateAction = (collection) => ({
  type: shopactionType.Action_Type_Update,
  payload: collection,
});
