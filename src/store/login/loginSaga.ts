import { call, put, takeLatest } from "redux-saga/effects";
import { signIn } from "../../api/auth";
import { signInFail, signInRequest, signInSuccess } from "./loginActions";
import { SignInModel } from "../../models/sigInModel";

function* signInSaga(action: { payload: SignInModel }) {
  try {
    yield call(signIn, {
      ...action.payload,
    });
    yield put(signInSuccess());
  } catch (e) {
    yield put(signInFail(e.message));
  }
}

export default function* () {
  yield takeLatest(signInRequest, signInSaga);
}
