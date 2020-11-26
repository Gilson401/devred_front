import http from "../config/http";

const getPostsService = (page = 1, limit = 5) => {
  return http.get(`/posts?_page=${page}&_limit=${limit}`);
};

const getCountPostsService = async (page = 1) => {
  const { data } = await http.get(`/posts`);
  return data.length;
};

export { getPostsService, getCountPostsService };
