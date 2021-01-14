import http from "../config/http";


/**Rota comment exige os keys content, author, e post */
const createCommnentService = (data) => {
  return http.post(`/comments`, data);
};

export { createCommnentService};
