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

export { getPostsService, getCountPostsService, createPostService };
