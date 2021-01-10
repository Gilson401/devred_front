const INITIAL_STATE = {
    userInterests: []
};


/**Manipula o array de topics  */
const interestsReducer = (state = INITIAL_STATE, action) => {
    // debugger
    switch (action.type) {
        case "GET_USER_INTERESTS":
            state.userInterests = action.userInterests;
            return state;

        case "ADD_USER_INTERESTS":
            //debugger
            state.userInterests.push(action.userInterests);
            return state;
        default:
            return state;
    }

};

export default interestsReducer;
