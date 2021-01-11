
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
 
        await createUserInterestsTopic(props)       
        dispatch({ type: "ADD_USER_INTERESTS", userInterests: props });
    };
};


/**Remove um tópico de interesse do User */
const actionDeleteUserInterestTopic = (id) => {
    return async (dispatch) => {
        const del = await deleteUserInterestsTopic(id);
        if (del) {
            dispatch({ type: "GET_USER_INTERESTS", userInterests: del.data });
          
            toastr.success("SUCESSO !", "Tópico de Interesse removido.");
            //depois que remove uma amizade dever atualizar a listade amigos...            
        }
    };
};





export { actionAddUserInterestTopic, actionGetUserInterestTopic, actionDeleteUserInterestTopic  };
