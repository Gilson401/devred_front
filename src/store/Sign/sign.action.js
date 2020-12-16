import { saveLocalStorage } from "../../config/auth";
import { authService } from "../../services/authService";
import history from "../../config/history";

export const SIGN = "SIGN";
export const SIGN_LOADING = "SIGN_LOADING";


/** Action que chama authService(props);*/
export const signIn = (props) => {
    
  return async (dispatch) => {
    // debugger
    dispatch({ type: SIGN_LOADING, loading: true });

    const { data } = await authService(props);
 
    dispatch({ type: SIGN, data: data });
    
    saveLocalStorage(data);
    history.push("/");
  };
};
