import http from "../config/http";



/**Retorna o array de friendship populado do user logado - reconhecido pelo Token Enviado. */
const getFriendship = async () => await http.get(`/friends`);


//TODO: Revisar todos abaixo,. não são sobre friendship
/**Apaga o registro de education na conforme o id informado {data :{ "_id": id }} */
const deleteEducationService = async (id) => await http.delete(`/education`,{data :{ "_id": id }});

const createEducationService = (data) => {
    return http.post(`/education`, data);
  };
  

export { getFriendship };