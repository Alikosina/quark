import { handleActions } from "redux-actions";
import {
  sendEmailFail,
  sendEmailRequest,
  sendEmailSuccess,
  setInitialState,
} from "./resetPasswordActions";

const initialState = {
  loading: false,
  isSent: false,
  error: null,
};

export default handleActions(
  {
    [`${sendEmailRequest}`]: () => ({ ...initialState, loading: true }),
    [`${sendEmailFail}`]: (state, { payload: { error } }) => ({
      ...state,
      loading: false,
      // специально для отображения SuccessMessage
      isSent: true,
      error,
    }),
    [`${sendEmailSuccess}`]: () => ({ ...initialState, isSent: true }),
    [`${setInitialState}`]: () => ({ ...initialState }),
  },
  initialState
);
