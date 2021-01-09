import http from "../config/http";

/** Faz http.get(`/interests`)*/
const getUserInterestsTopics = () => {
  return http.get(`/interests`);
};


/** chama http.post(`/interests`, data)*/
const createUserInterestsTopic = (data) => {
  return http.post(`/interests`, data);
};

/** chama http.delete(`/interests`, data)*/
const deleteUserInterestsTopic = (data) => {
    return http.post(`/interests`, data);
  };
  

export {getUserInterestsTopics , createUserInterestsTopic, deleteUserInterestsTopic }