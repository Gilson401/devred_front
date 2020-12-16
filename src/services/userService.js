import http from "../config/http";


/**Get User by id */
const getProfileUser = async (id) => await http.get(`/user/${id}`);


const updateUserService = (id, data, config = {}) => http.patch(`/user/${id}`, data, config)


/**Update de user */
const deleteEducationService = async (id) => await http.delete(`/education`,{data :{ "_id": id }});

const createEducationService = (data) => {
    return http.post(`/education`, data);
  };
  


export {updateUserService, getProfileUser, deleteEducationService, createEducationService };
