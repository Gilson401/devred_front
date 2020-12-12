const INITIAL_STATE = {
    profile: {
    }
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_PROFILE":
            state.profile = action.profile;
            return state;
        default:
            return state;
    }
};

export default reducer;

// friendships: [
//     "5fca474235bd547bd8d6f9bd"
// ],
// topics_of_interest: [],
// skills: [],
// _id: "5fca2364d0e85e4084275146",
// email: "auth@auth.com",
// name: "Gilson",
// username: "Gil",
// education: [
//     {
//         current: false,
//         _id: "",
//         school: "",
//         degree: "",
//         fieldofstudy: "",
//         from: "",
//         to: "",
//         description: "",
//     },
// ],
// picture: "",
// __v: 7,
// }