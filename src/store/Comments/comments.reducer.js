import { COMMENTS_LOADING, GET_COMMENTS, CREATE_COMMENTS } from "./comments.action";


const INITIAL_STATE = {
  all: [],
  loading: false,
  total: 0,
};

const commentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMMENTS_LOADING:
      state.loading = action.status;
      return state;
    case GET_COMMENTS:
      state.all = action.data;
      state.total = action.total;
      state.loading = false;
      return state;
    case CREATE_COMMENTS:
      state.loading = false;
      return state;
    default:
      return state;
  }
};

export { commentsReducer};
