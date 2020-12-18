import http from "../config/http";

const getPostsService = (page = 1, limit = 5) => {
  return http.get(`/posts?_page=${page}&_limit=${limit}&_sort=id,views&_order=desc,asc`);
};

const getCountPostsService = async (page = 1) => {
  const { data } = await http.get(`/posts`);
  return data.length;
};


/**13/12/2020 - Rota post ainda não foi subida */
const createPostService = (data) => {
  return http.post(`/posts`, data);
};


/**Manda like para um post */
const likeInPost = (post) => http.post(`/like/${post}`);


/**Manda dislike para um post */
const dislikeInPost = (post) => http.post(`/dislike/${post}`);



/**Manda like para um post */
const remove_likeInPost = (post) => http.delete(`/like/${post}`);


/**Manda dislike para um post */
const remove_dislikeInPost = (post) => http.delete(`/dislike/${post}`);

export {remove_likeInPost, remove_dislikeInPost, likeInPost, dislikeInPost, getPostsService, getCountPostsService, createPostService };
