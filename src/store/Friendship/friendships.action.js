
import { toastr } from "react-redux-toastr";
import { getFriendship } from "../../services/friendshpsService";


/**Chama getFriendships e chama salvamento do Profle na store do user logado */
const actionGetFriendships = (props) => {
    // debugger
    return async (dispatch) => {
        const data = await getFriendship()
       
        dispatch({ type: "SET_FRIENDSHIP", friendship: data.data });
    };
};

// const deleteEducation = (id) => {
//     return async (dispatch) => {
//         // dispatch({ type: "DELETE_EDUCATIOn", profile: data });

//         const del = await deleteEducationService(id);
//         if (del) {
//             toastr.success("SUCESSO !", "Cadastro de postagem feito com sucesso.");
//             getProfile();
//         }
//     };
// };



/**TODO */
// const AddEducation = (id) => {
//     return async (dispatch) => {
//         // dispatch({ type: "DELETE_EDUCATIOn", profile: data });

//         const education = await createEducationService(id);
//         if (education) {
//             toastr.success("SUCESSO !", "Cadastro de education feito com sucesso.");
//             getProfile();
//         }
//     };
// };


export { actionGetFriendships};
