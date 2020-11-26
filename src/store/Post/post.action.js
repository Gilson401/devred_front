import { getPostsService, getCountPostsService } from "../../services/posts";

export const POST_LOADING = "POST_LOADING";
export const GET_POSTS = "GET_POSTS";

export const getPostAll = (page, limit) => {
  return async (dispatch) => {
    dispatch({ type: POST_LOADING, status: true });
    const count = await getCountPostsService();
    const posts = await getPostsService(page, limit);
    dispatch({ type: GET_POSTS, data: posts.data, total: count });
  };
};
