
import { toastr } from "react-redux-toastr";

import { getTopic, createTopic } from "../../services/topicService";


/**Chama getTopic (Todos os tópicos existrentes na plataforma) e chama salvamento do Topic */
const actionGetTopic = (props) => {
    return async (dispatch) => {        
        const data = await getTopic()  
        dispatch({ type: "SET_TOPIC", topic: data.data });
    };
};


/**Adiciona um tópico de interesse no perfil do user */
const actionAddTopic = (props) => {
    // debugger
    return async (dispatch) => {
        const data = await createTopic(props)       
        dispatch({ type: "CREATE_TOPIC", topics: data.data });
    };
};



// const actionDeleteFriendship = (id) => {
//     return async (dispatch) => {

//         const del = await deleteFriendship(id);
//         if (del) {
//             toastr.success("SUCESSO !", "Amizade removida com sucesso.");
//             //depois que remove uma amizade dever atualizar a listade amigos...
//             dispatch(actionGetFriendships());
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


export { actionAddTopic, actionGetTopic};
