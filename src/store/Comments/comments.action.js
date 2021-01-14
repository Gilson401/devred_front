
import { toastr } from "react-redux-toastr";
import { createCommnentService } from "../../services/commentService";
import { getCountPostsService, getPostsService } from "../../services/posts";
import { getPostAll } from "../Post/post.action";

export const COMMENTS_LOADING = "COMMENTS_LOADING";
export const GET_COMMENTS = "GET_COMMENTS";
export const CREATE_COMMENTS = "CREATE_COMMENTS";


// /**Action que pega os posts */
// export const getCommentPostAll = (page, limit) => {
//   return async (dispatch) => {
//     dispatch({ type: COMMENTS_LOADING, status: true });

//     const count = await getCountPostsService();
//     const posts = await getPostsService(page, limit);

//     dispatch({ type: GET_COMMENTS, data: posts.data, total: count });
//   };
// };


/** action que cria uma resposta para um post. O objeto a ser enviado deve ter
 * content, author e post
 */
export const actionCreateComment = (form) => {
  return async (dispatch) => {

    dispatch({ type: COMMENTS_LOADING, status: true });
    try {
      await createCommnentService(form)
      .then(()=>{ 
          dispatch(getPostAll())
                 })

      dispatch({ type: CREATE_COMMENTS, form }); //parece ser inútil
      toastr.success("SUCESSO !", "Cadastro de comments feito com sucesso.");
  
    } catch (error) {
      toastr.error(`Erro no cadastro: ${error.message}`);
    }
  };
};
