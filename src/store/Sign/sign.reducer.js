import { getToken, getUser } from "../../config/auth";
import { SIGN, SIGN_LOADING } from "./sign.action";

const INITIAL_STATE = {
  loading: false,
  token: getToken() || "",
  user: getUser() || {},
};

const reducer = (state = INITIAL_STATE, action) => {
    // debugger
  switch (action.type) {
    case SIGN_LOADING:
      state.loading = action.loading;
      return state;
    case SIGN:
      state.token = action.data.token;
      state.user = action.data.user;
      state.loading = false;

      return state;
    default:
      return state;
  }
};

export default reducer;
