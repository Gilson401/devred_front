import http from "../config/http";

const getTopic = (page = 1, limit = 5) => {
  return http.get(`/posts?_page=${page}&_limit=${limit}&_sort=id,views&_order=desc,asc`);
};


/**13/12/2020 - Rota post ainda não foi subida */
const createTopic = (data) => {
  return http.post(`/posts`, data);
};

export {getTopic ,createTopic};
