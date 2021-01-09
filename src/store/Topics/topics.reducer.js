const INITIAL_STATE = {
    topic: [{
    }]
};


/**Manipula o array de topics  */
const topicReducer = (state = INITIAL_STATE, action) => {
    // debugger
    switch (action.type) {
        case "SET_TOPIC":
            state.topic = action.topic;
            return state;
        default:
            return state;
    }

};

export default topicReducer;
