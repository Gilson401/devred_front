export const SIGN = "SIGN";
export const SIGN_LOADING = "SIGN_LOADING";

export const signIn = (props) => {
  return (dispatch) => {
    dispatch({ type: SIGN_LOADING });
    dispatch({ type: SIGN });
  };
};

