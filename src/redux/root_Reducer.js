import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./reducer/user/userReducer";
import cartReducer from "./reducer/cart/cart.reduce";
import DirectoryReducer from "./reducer/Directory/Directory.Reducer";
import shopReducer from "./reducer/shop/shop.reducer";
// redux-persist is a library which let's us use both (local , session)storage
// in config say at what point you want to store
// which type of storage you want to use
// which reducer you want to store

const configPersisit = {
  key: "root", //at the root ot first line i want to store
  storage, //i want to use localStorage
  whitelist: ["cart"], //this Reducer i want to store at first
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  Directory: DirectoryReducer,
  shop: shopReducer,
});
export default persistReducer(configPersisit, rootReducer);
// this is our state obj this will generete our big state root reducer
