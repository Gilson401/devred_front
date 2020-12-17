import { saveLocalStorage } from "../../config/auth";
import { authService } from "../../services/authService";
import history from "../../config/history";
import http from "../../config/http";
import { toastr } from "react-redux-toastr";

export const SIGN = "SIGN";
export const SIGN_LOADING = "SIGN_LOADING";


/** Action que chama authService(props);*/
export const signIn = (props) => {

    return async (dispatch) => {

        try {

            dispatch({ type: SIGN_LOADING, loading: true });
            const { data } = await authService(props);
            dispatch({ type: SIGN, data: data });
            saveLocalStorage(data);
            http.defaults.headers["x-auth-token"] = data.token;
            history.push("/");
        } catch (error) {
            toastr.error("ERROR !", `Não foi possível fazer o login, verifique login e senha`);
        }

    };
};



