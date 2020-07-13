import { createActions } from "redux-actions";

import {
  SEND_EMAIL_FAIL,
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  SET_INITIAL_STATE,
} from "./resetPasswordConstants";

export const {
  sendEmailRequest,
  sendEmailSuccess,
  sendEmailFail,
  setInitialState,
} = createActions({
  [SEND_EMAIL_REQUEST]: (email: string) => ({
    email,
  }),
  [SEND_EMAIL_SUCCESS]: () => ({}),
  [SEND_EMAIL_FAIL]: (error: string) => ({ error }),
  [SET_INITIAL_STATE]: () => ({}),
});
