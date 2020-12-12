import http from "../config/http";


/**Get User by id */
const getProfileUser = async (id) => await http.get(`/user/${id}`);

/**Apaga o registro de education na conforme o id informado {data :{ "_id": id }} */
const deleteEducationService = async (id) => await http.delete(`/education`,{data :{ "_id": id }});

const createEducationService = (data) => {
    return http.post(`/education`, data);
  };
  

export { getProfileUser, deleteEducationService, createEducationService };
