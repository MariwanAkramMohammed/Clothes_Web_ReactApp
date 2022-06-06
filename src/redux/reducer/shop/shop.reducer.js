import shopactionType from "./shopType";

const Initial_State = {
  collections: null,
};
const shopReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case shopactionType.Action_Type_Update:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};
export default shopReducer;
