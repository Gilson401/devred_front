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







export { actionAddTopic, actionGetTopic};
