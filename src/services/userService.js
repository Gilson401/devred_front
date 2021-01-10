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
  

    /**Remove uma Skill chamando http.delete(`/skill`, {data}) */
    const removeSkillService = (param) => {
        const data = {skills : param}
        return http.delete(`/skill`, {data});
    };
      

export {addSkillService, removeSkillService, updateUserService, getProfileUser, deleteEducationService, createEducationService,
    getAllUsers };
