

export const RELOADER_LOADING = "RELOADER_LOADING";



/**Intenta ser um disparador geral de atualizações. 
 * É uma int que aumenta 1 toda vez que é chamada */
export const reloaderAction = () => {
  return async (dispatch) => {
    dispatch({ type: RELOADER_LOADING});
  };
};


