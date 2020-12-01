import {
  getPostsService,
  getCountPostsService,
  createPostService,
} from "../../services/posts";
import { toastr } from "react-redux-toastr";

export const POST_LOADING = "POST_LOADING";
export const GET_POSTS = "GET_POSTS";
export const CREATE_POST = "CREATE_POST";

export const getPostAll = (page, limit) => {
  return async (dispatch) => {
    dispatch({ type: POST_LOADING, status: true });
    const count = await getCountPostsService();
    const posts = await getPostsService(page, limit);
    dispatch({ type: GET_POSTS, data: posts.data, total: count });
  };
};

export const createPost = (form) => {
  return async (dispatch) => {
    const post = {
      author: "Liniker Silva",
      title: form.title,
      description: form.description,
      created_at: "Sunday, March 8, 2020 11:33 PM",
      avatar: "http://placehold.it/300x300",
    };
    dispatch({ type: POST_LOADING, status: true });
    try {
      await createPostService(post);

      dispatch({ type: CREATE_POST, post });
      toastr.success("SUCESSO !", "Cadastro de postagem feito com sucesso.");
      getPostAll(1, 7);
    } catch (error) {
      toastr.error("Cadastro de postagem feito com sucesso.");
    }
  };
};
