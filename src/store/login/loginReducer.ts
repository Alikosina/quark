import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
} from "./loginConstants";

const initialState = {
  loading: false,
  error: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
