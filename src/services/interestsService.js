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
const deleteUserInterestsTopic = (datai) => {
    return http.delete(`/interests`, {data :datai});
  };
  

export {getUserInterestsTopics , createUserInterestsTopic, deleteUserInterestsTopic }