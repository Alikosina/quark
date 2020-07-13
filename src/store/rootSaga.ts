import { all } from "redux-saga/effects";
import loginSaga from "./login/loginSaga";
import resetPasswordSaga from "./resetPassword/resetPasswordSaga";

export default function* rootSaga() {
  yield all([loginSaga(), resetPasswordSaga()]);
}
