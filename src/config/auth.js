const TOKEN_KEY = "dev_connector";



/** Retorna  data.token de  localStorage.getItem(TOKEN_KEY)*/
const getToken = () => {

 
  const data = JSON.parse(localStorage.getItem(TOKEN_KEY));

  if (data && data.token) {

    return data.token;
  }
  return false;
};

/**Retorna o objeto user (id e email do usuário logado) que está em local storage na key dev_conector */
const getUser = () => {
  const data = JSON.parse(localStorage.getItem(TOKEN_KEY));
  if (data && data.user) {
    return data.user;
  }
  return false;
};

const saveLocalStorage = (data) =>
  localStorage.setItem(TOKEN_KEY, JSON.stringify(data));

const removeToken = () => localStorage.removeItem(TOKEN_KEY);

const isAuthenticated = () => {
  // pegar dentro do localstage
  // validar o token
  // retornar se true ou false
  return getToken() !== false;
};

export { isAuthenticated, getToken, getUser, saveLocalStorage, removeToken };
