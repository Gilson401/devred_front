
import { toastr } from "react-redux-toastr";
import { getFriendship, getSugestedFriend, deleteFriendship } from "../../services/friendshpsService";


/**Chama getFriendships e chama salvamento do Profle na store do user logado */
const actionGetFriendships = (props) => {
   
    return async (dispatch) => {
        const data = await getFriendship()
       
        dispatch({ type: "SET_FRIENDSHIP", friendship: data.data });
    };
};


/** Retorna não amigos com pelo menos uma skill em comum através do getSugestedFriend */
const actionGetNotFriendships = (props) => {
   
    return async (dispatch) => {
        const data = await getSugestedFriend(props)
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




export { actionGetFriendships, actionGetNotFriendships, actionDeleteFriendship};
