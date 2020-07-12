import { createActions } from "redux-actions";

import {
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
} from "./loginConstants";
import { SignInModel } from "../../models/sigInModel";

export const { signInRequest, signInSuccess, signInFail } = createActions({
  [SIGN_IN_REQUEST]: (params: SignInModel) => ({
    ...params,
  }),
  [SIGN_IN_SUCCESS]: () => ({}),
  [SIGN_IN_FAIL]: (error: string) => ({ error }),
});
