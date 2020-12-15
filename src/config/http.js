import axios from 'axios'
import { getToken, removeToken } from './auth';
import history from './history'

//TODO
// const localUrlApi = `http://localhost:3001`

//process.env.REACT_APP_API || 
const http = axios.create({
    // baseURL: `http://localhost:3001`

    baseURL:  process.env.NODE_ENV==='development'
    // ? `https://backglutenfree.herokuapp.com/`
    ? `http://localhost:3005/`
    : process.env.REACT_APP_API


})

http.defaults.headers['Content-type'] = 'application/json'
http.defaults.headers["x-forwarded-proto"] = "https"

if (getToken()) {
    http.defaults.headers["x-auth-token"] = getToken();
}

http.interceptors.response.use(
    response => response,
    error => {

        // const status = error.response.status
        const { response: { status } } = error
        console.log(error.message)
        
        if (error.message === 'Network Error' && !error.message) {
            alert('você está sem internet...reconecte !!!!!')
        }

        console.log("error.message", error.message)
        switch (status) {
            case 401:
                console.log('Token inválido...', getToken())

                // removeToken()
                // history.push('/signin')
                break;
            default:
                console.log(status, `aconteceu um erro ${status}`)
                console.log('aconteceu um erro...', getToken())
                alert(`Erro na resposta da requisição  ${status}`)
                break;
        }

        // axios.interceptors.response.eject(interceptors) // global
        return Promise.reject(error)
    }
)

export default http;
