import { saveLocalStorage } from "../../config/auth";
import { authService } from "../../services/authService";
import history from "../../config/history";
import http from "../../config/http";
import { toastr } from "react-redux-toastr";

export const SIGN = "SIGN";
export const SIGN_LOADING = "SIGN_LOADING";


/**  Login de user cadastrado. Action que chama authService(props);*/
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
            const options = {
                position: 'top-center',
                transitionIn: 'bounceIn',
                transitionOut: 'bounceOut'
              }
        toastr.error(`Não foi possível fazer login. Verificar usuário e senha.`, options);
           
        }

    };
};



