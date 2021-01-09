import {
    getProfileUser,
    deleteEducationService,
    createEducationService,
    getAllUsers
} from "../../services/userService";
import { toastr } from "react-redux-toastr";
import { getUser } from "../../config/auth";


/**Action que Chama GetUser e chama salvamento do Profle na store do user logado */
const actionGetProfile = (props) => {
    return async (dispatch, getState) => {
        //   const { auth } = getState();
        const user = getUser()
        if(user){
        const data = await getProfileUser(user.id);
        const prof = data.data
        dispatch({ type: "SET_PROFILE", profile: prof });
        }
    };
};

const actionGetAllUsers = () => {
    return async (dispatch) => {
      
        const data = await getAllUsers();
        dispatch({ type: "SET_ALL_USERS", allUsers: data.data });
        
    };
};
const deleteEducation = (id) => {
    return async (dispatch) => {
        // dispatch({ type: "DELETE_EDUCATIOn", profile: data });

        const del = await deleteEducationService(id);
        if (del) {
            toastr.success("SUCESSO !", "Cadastro de postagem feito com sucesso.");
            actionGetProfile();
        }
    };
};



/**TODO */
const AddEducation = (id) => {
    return async (dispatch) => {
        // dispatch({ type: "DELETE_EDUCATIOn", profile: data });

        const education = await createEducationService(id);
        if (education) {
            toastr.success("SUCESSO !", "Cadastro de education feito com sucesso.");
            actionGetProfile();
        }
    };
};


export { actionGetProfile as getProfile, deleteEducation, AddEducation, actionGetAllUsers };
