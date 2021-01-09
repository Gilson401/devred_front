import http from "../config/http";

/** Faz http.get(`/topic`)*/
const getTopic = () => {
  return http.get(`/topic`);
};


/** chama http.post(`/topic`, data)*/
const createTopic = (data) => {
  return http.post(`/topic`, data);
};


  

export {getTopic ,createTopic};
