import { call, put, takeLatest } from "redux-saga/effects";
import { sendEmail } from "../../api/auth";
import {
  sendEmailRequest,
  sendEmailFail,
  sendEmailSuccess,
} from "./resetPasswordActions";

function* sendEmailSaga({
  payload: { email },
}: {
  payload: {
    email: string;
  };
}) {
  try {
    yield call(sendEmail, email);
    yield put(sendEmailSuccess());
  } catch (e) {
    yield put(sendEmailFail(e.message));
  }
}

export default function* () {
  yield takeLatest(sendEmailRequest, sendEmailSaga);
}
