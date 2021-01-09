
import { toastr } from "react-redux-toastr";
import { getFriendship, getSugestedFriend, deleteFriendship } from "../../services/friendshpsService";


/**Chama getFriendships e chama salvamento do Profle na store do user logado */
const actionGetFriendships = (props) => {
    // debugger
    return async (dispatch) => {
        const data = await getFriendship()
       
        dispatch({ type: "SET_FRIENDSHIP", friendship: data.data });
    };
};


/** Retorna não amigos com pelo menos uma skill em comum através do getSugestedFriend */
const actionGetNotFriendships = (props) => {
    // debugger
    return async (dispatch) => {
        const data = await getSugestedFriend(props)
       console.log("actionGetNotFriendships CHAMADA", data.data)
        dispatch({ type: "SET_SUGEST_FRIENDSHIP", sugested_friendship: data.data });
    };
};





const actionDeleteFriendship = (id) => {
    return async (dispatch) => {

        const del = await deleteFriendship(id);
        if (del) {
            toastr.success("SUCESSO !", "Amizade removida com sucesso.");
            //depois que remove uma amizade dever atualizar a listade amigos...
            dispatch(actionGetFriendships());
        }
    };
};



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


export { actionGetFriendships, actionGetNotFriendships, actionDeleteFriendship};
