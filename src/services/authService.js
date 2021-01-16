import http from "../config/http";

/**Serviço de login */
const authService = (data) => http.post("/auth", data);


/**Serviço de userconfirm , NOVO USER */
const userConfirm = (data) => http.post("/userconfirm", data);
//

export { authService, userConfirm  };
