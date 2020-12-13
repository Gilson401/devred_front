import http from "../config/http";

//TODO: Revisar todos

/**Retorna o array de friendship populado do user logado - reconhecido pelo Token Enviado. */
const getFriendship = async () => await http.get(`/friends`);

/**Apaga o registro de education na conforme o id informado {data :{ "_id": id }} */
const deleteEducationService = async (id) => await http.delete(`/education`,{data :{ "_id": id }});

const createEducationService = (data) => {
    return http.post(`/education`, data);
  };
  

export { getFriendship };