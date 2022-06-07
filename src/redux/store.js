import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root_Reducer";
const middleware = [logger];
// const middleware = [thunk];
//thunk just take care of dispatch that have function instead of obj action
//then thunk returns dispatch propery to thar function to use it to fire multipl action(event)
//so thunk is a redux library that let us to handle functio
// if(process.env.NODE_ENV='development'){
//   middleware.push(logger)
// }

export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);

export default { store, persistor };
