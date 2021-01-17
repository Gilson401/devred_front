import { apagarItem } from "../util/util";

const TOKEN_KEY = "coders";
const CODERS_PREF = "coders_pref"


/**Retorna o array de tópicos de preferência armazenado em local storage */
export const getCodersPref = () => {     
    return  JSON.parse(localStorage.getItem(CODERS_PREF))
}

/**data = array ou string MOngoId */
export const setCodersPref = (data) => {
    localStorage.setItem(CODERS_PREF, JSON.stringify(data));
}


export const addCodersPref = (data) => {
     
    let localStorageContent = JSON.parse(localStorage.getItem(CODERS_PREF))
    
    if (!localStorageContent.some(item => item === data)) {
        localStorageContent = localStorageContent.concat(data)
        localStorage.setItem(CODERS_PREF, JSON.stringify(localStorageContent));
    }

}

export const removeCodersPref = (data) => {
    let localStorageContent = JSON.parse(localStorage.getItem(CODERS_PREF))
    apagarItem(localStorageContent, data)
    localStorage.setItem(CODERS_PREF, JSON.stringify(localStorageContent));
}



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


/**esse está ok */
const saveLocalStorage = (data) => {
    let dataJSONStringfy = JSON.stringify(data)
    localStorage.setItem(TOKEN_KEY, dataJSONStringfy);
    const du = data.user.topics_of_interest
    setCodersPref(du)
}
const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(CODERS_PREF);
}
const isAuthenticated = () => {
    // pegar dentro do localstage
    // validar o token
    // retornar se true ou false
    return getToken() !== false;
};

export { isAuthenticated, getToken, getUser, saveLocalStorage, removeToken };
