import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import appReducer from "./app/app-reducer";

const store = createStore(appReducer, composeWithDevTools());

console.log(store.getState());

export default store;
