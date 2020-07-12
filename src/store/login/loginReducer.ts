import { handleActions } from "redux-actions";
import { signInRequest, signInFail, signInSuccess } from "./loginActions";

const initialState = {
  loading: false,
  error: null,
};

export default handleActions(
  {
    [`${signInRequest}`]: () => ({ ...initialState, loading: true }),
    [`${signInFail}`]: (state, { payload: { error } }) => ({
      ...state,
      loading: false,
      error,
    }),
    [`${signInSuccess}`]: () => ({ ...initialState }),
  },
  initialState
);
