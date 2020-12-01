import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as toastrReducer } from "react-redux-toastr";

import thunk from "redux-thunk";
import multi from "redux-multi";

// importação dos reducers
import SignReducer from "./Sign/sign.reducer";
import PostReducer from "./Post/post.reducer";

// modularizações dos reduces
const reducers = combineReducers({
  auth: SignReducer,
  post: PostReducer,
  toastr: toastrReducer,
});

// middlewares de confifurações do projeto
const middleware = [thunk, multi];

// compose que junta os middlewares e ferramentas de debug
const compose = composeWithDevTools(applyMiddleware(...middleware));

// criação da store
const store = createStore(reducers, compose);

export default store;

// ---------------------------
