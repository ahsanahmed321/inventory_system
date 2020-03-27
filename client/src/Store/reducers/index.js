import { combineReducers } from "redux";
import authReducer from "./authReducer";
import xyzReducer from "./xyzReducer";
import errorReducer from "../reducers/errorReducer";

export default combineReducers({
  auth: authReducer,
  xyz: xyzReducer,
  errors: errorReducer
});
