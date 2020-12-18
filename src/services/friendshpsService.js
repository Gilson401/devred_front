import http from "../config/http";



/**Retorna o array de friendship populado do user logado - reconhecido pelo Token Enviado. */
const getFriendship = async () => await http.get(`/friends`);



/** Passe no skill o array de skills do user logado */
const getSugestedFriend = async (data) => await http.post(`/sugestfriends`, data);


//TODO: Revisar 
const createEducationService = (data) => {
    return http.post(`/education`, data);
  };
  

export { getFriendship, getSugestedFriend };