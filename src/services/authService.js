import http from "../config/http";

/**Serviço de login */
const authService = (data) => http.post("/auth", data);

export { authService };
