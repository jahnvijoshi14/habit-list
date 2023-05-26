import { combineReducers, createStore } from "redux";
import { habitReducer } from "./reducers/habitReducer";

const rootReducer = combineReducers({ habitReducer });

const store = createStore(rootReducer);

export default store;
