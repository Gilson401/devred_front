const INITIAL_STATE = {
    friendship: [{
    }]
};


/**Manipula o array de friendships  */
const friendshipsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "SET_FRIENDSHIP":
            state.friendship = action.friendship;
            return state;
        default:
            return state;
    }

};

export default friendshipsReducer;
