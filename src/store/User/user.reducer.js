const INITIAL_STATE = {
    profile: {
    },
    allUsers: []
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_PROFILE":
            state.profile = action.profile;
            return state;
        case "SET_ALL_USERS":
            state.allUsers = action.allUsers;
            return state;
        default:
            return state;
    }
};

export default userReducer;