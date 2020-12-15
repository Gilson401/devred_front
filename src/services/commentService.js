import http from "../config/http";

// const getCommentService = (page = 1, limit = 5) => {
//   return http.get(`/posts?_page=${page}&_limit=${limit}&_sort=id,views&_order=desc,asc`);
// };

// const getCountPostsService = async (page = 1) => {
//   const { data } = await http.get(`/posts`);
//   return data.length;
// };

/**Rota comment exige os keys content, author, e post */
const createCommnentService = (data) => {
  return http.post(`/comments`, data);
};

export { createCommnentService};
