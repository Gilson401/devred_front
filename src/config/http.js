import axios from "axios";

const api_local = "http//localhost:3001";

// Instância do cliente HTTP para as requisições
const http = axios.create({
  baseURL: process.env.REACT_APP_API || api_local,
});

// Padronizar requisições com json
http.defaults.headers["Content-type"] = "application/json";

// verificação se existe token
// if(){
// http.defaults.headers["x-auth-token"] =
// }

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.message === "Network Error" && !error.message) {
      alert("você está sem internet...reconecte !!!!!");
    }
    switch (error.response.status) {
      case 401:
        console.log("Token inválido...");
        // removeToken();
        // history.push("/login");
        break;
      case 404:
        console.log("Pagina não encontrada...");
        // removeToken();
        // history.push("/login");
        break;
      default:
        console.log(
          error.response.status,
          `aconteceu um erro ${error.response.status}`
        );
        break;
    }

    // axios.interceptors.response.eject(interceptors) // global
    return Promise.reject(error);
  }
);
