
import { toastr } from "react-redux-toastr";

import {getUserInterestsTopics , createUserInterestsTopic, deleteUserInterestsTopic} from "../../services/interestsService";


/**Chama getTopic e chama salvamento do Topic */
const actionGetUserInterestTopic = (props) => {
    return async (dispatch) => {        
        const data = await getUserInterestsTopics()  
        dispatch({ type: "GET_USER_INTERESTS", userInterests: data.data });
    };
};


/**Adiciona um tópico de interesse no perfil do user */
const actionAddUserInterestTopic = (props) => {
 
    return async (dispatch) => {
       // debugger
        const data = await createUserInterestsTopic(props)       
        dispatch({ type: "ADD_USER_INTERESTS", userInterests: props });
    };
};


/**Remove um tópico de interesse do User */
const actionDeleteUserInterestTopic = (id) => {
    return async (dispatch) => {
        const del = await deleteUserInterestsTopic(id);
        if (del) {
            dispatch({ type: "GET_USER_INTERESTS", userInterests: del.data });
            debugger
            toastr.success("SUCESSO !", "Tópico de Interesse removid com sucesso.");
            //depois que remove uma amizade dever atualizar a listade amigos...            
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


export { actionAddUserInterestTopic, actionGetUserInterestTopic, actionDeleteUserInterestTopic  };
