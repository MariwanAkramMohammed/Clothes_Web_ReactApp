import SET_CURRENT_USER from "./user.action.type";

const Initial_User = {
  current_User: null,
};
const userReducer = (state = Initial_User, action) => {
  switch (action.type) {
    case SET_CURRENT_USER.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
