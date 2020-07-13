import { handleActions } from "redux-actions";
import {
  sendEmailFail,
  sendEmailRequest,
  sendEmailSuccess,
  setInitialState,
} from "./resetPasswordActions";

const initialState = {
  loading: false,
  error: null,
  data: {
    isSent: false,
  },
};

export default handleActions(
  {
    [`${sendEmailRequest}`]: () => ({ ...initialState, loading: true }),
    [`${sendEmailFail}`]: (state, { payload: { error } }) => ({
      ...state,
      loading: false,
      // специально для отображения SuccessMessage
      data: {
        isSent: true,
      },
      error,
    }),
    [`${sendEmailSuccess}`]: () => ({
      ...initialState,
      data: {
        isSent: true,
      },
    }),
    [`${setInitialState}`]: () => ({ ...initialState }),
  },
  initialState
);
