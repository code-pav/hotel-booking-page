import { combineReducers } from "redux";
import { storeReducer } from "./shop/reducers";
import { headerReducer } from "./header/reducers";
export default combineReducers({ storeReducer, headerReducer });
