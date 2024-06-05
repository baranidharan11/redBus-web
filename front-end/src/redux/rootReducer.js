import { combineReducers } from "redux";
import busReducer from "./bus/reducer";

const rootReducer = combineReducers({
  buses: busReducer,
});

export default rootReducer;
