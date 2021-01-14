const INITIAL_STATE = {
    userInterests: []
};


/**Manipula o array de topics  */
const interestsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "GET_USER_INTERESTS":
            state.userInterests = action.userInterests;
            return state;

        case "ADD_USER_INTERESTS":

            state.userInterests.push(action.userInterests);
            return state;

        case "ADD_IN_USER_INTERESTS":

            state.userInterests = state.userInterests.concat(action.userInterests);
            return state;

        default:
            return state;
    }

};

export default interestsReducer;
