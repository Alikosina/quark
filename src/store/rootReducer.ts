import loginReducer from "./login/loginReducer";
import resetPasswordReducer from "./resetPassword/resetPasswordReducer";
import { combineReducers } from "redux";

export default combineReducers({
  login: loginReducer,
  resetPassword: resetPasswordReducer,
});
