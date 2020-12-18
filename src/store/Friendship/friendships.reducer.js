const INITIAL_STATE = {
    friendship: [{
    }],
    sugested_friendship: [{
    }]
};


/**Manipula o array de friendships  */
const friendshipsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "SET_FRIENDSHIP":
            state.friendship = action.friendship;
            return state;
        case "SET_SUGEST_FRIENDSHIP":
            state.sugested_friendship = action.sugested_friendship;
            return state;


        default:
            return state;
    }

};

export default friendshipsReducer;
