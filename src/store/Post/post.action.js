import {
  getPostsService,
  getCountPostsService,
  createPostService,
} from "../../services/posts";
import { toastr } from "react-redux-toastr";

export const POST_LOADING = "POST_LOADING";
export const GET_POSTS = "GET_POSTS";
export const CREATE_POST = "CREATE_POST";


/**Action que pega os posts */
export const getPostAll = (page, limit) => {
  return async (dispatch) => {
    dispatch({ type: POST_LOADING, status: true });
    const count = await getCountPostsService();
    const posts = await getPostsService(page, limit);
    dispatch({ type: GET_POSTS, data: posts.data, total: count });
  };
};


/**(13/12/2020)Não subiu a rota post ainda no git */
export const createPost = (form) => {
  return async (dispatch) => {

    dispatch({ type: POST_LOADING, status: true });
    try {
      await createPostService(form);

      dispatch({ type: CREATE_POST, form });
      toastr.success("SUCESSO !", "Cadastro de postagem feito com sucesso.");
      getPostAll(1, 7);
    } catch (error) {
      toastr.error(`Erro no cadastro: ${error.message}`);
    }
  };
};
