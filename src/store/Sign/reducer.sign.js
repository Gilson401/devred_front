import { SIGN, SIGN_LOADING } from "./action.sign";

const INITIAL_STATE = {
  login: {
    email: "contato@liniker.com.br",
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_LOADING:
      console.log(">> SIGN");
      return state;
    case SIGN:
      console.log(">> SIGN_LOADING");
      return state;
    default:
      return state;
  }
};

export default reducer;
