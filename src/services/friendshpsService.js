import http from "../config/http";



/**Retorna o array de friendship populado do user logado - reconhecido pelo Token Enviado. */
const getFriendship = async () => await http.get(`/friendship`);


/** Passe no skill o array de skills do user logado */
const getSugestedFriend = async (data) => await http.post(`/sugestfriends`, data);

/** data deve conter {"id": "ID DO USER QUE QUER ADICIONAR"}*/
const addFriendship = async (data) => await http.post(`/friendship`, data);
  
const deleteFriendship = async (dados) => await http.delete(`/friendship`, {data: { id: dados }});

export { addFriendship, getFriendship, getSugestedFriend, deleteFriendship };