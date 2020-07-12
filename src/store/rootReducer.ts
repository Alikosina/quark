import loginReducer from "./login/loginReducer";
import { combineReducers } from "redux";

export default combineReducers({
  login: loginReducer,
});
