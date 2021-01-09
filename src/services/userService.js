import http from "../config/http";


/**Get User by id */
const getProfileUser = async (id) => await http.get(`/user/${id}`);

/**Get All Users*/
const getAllUsers = async () => await http.get(`/user`);

/**Atualiza o user com o Id fornecido */
const updateUserService = (id, data, config = {}) => http.patch(`/user/${id}`, data, config)


/**Update de user */
const deleteEducationService = async (id) => await http.delete(`/education`,{data :{ "_id": id }});

const createEducationService = (data) => {
    return http.post(`/education`, data);
  };
  
  /**Adiciona uma Skill  */
  const addSkillService = (data) => {
    return http.post(`/skill`, data);
  };
  

export {addSkillService, updateUserService, getProfileUser, deleteEducationService, createEducationService,
    getAllUsers };
