const TOKEN_KEY = "dev_connector";
const getToken = () => {
  const data = JSON.parse(localStorage.getItem(TOKEN_KEY));
  if (data && data.token) {
    return data.token;
  }
  return false;
};
const getUser = () => {
  const data = JSON.parse(localStorage.getItem(TOKEN_KEY));
  if (data && data.user) {
    return data.user;
  }
  return false;
};

const saveToken = (data) =>
  localStorage.setItem(TOKEN_KEY, JSON.stringify(data));

const removeToken = () => localStorage.removeItem(TOKEN_KEY);

const isAuthenticated = () => {
  // pegar dentro do localstage
  // validar o token
  // retornar se true ou false
  return getToken() !== false;
};

export { isAuthenticated, getToken, getUser, saveToken, removeToken };
