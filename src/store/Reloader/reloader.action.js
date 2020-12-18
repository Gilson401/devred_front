

export const RELOADER_LOADING = "RELOADER_LOADING";



/**Action que pega os posts */
export const reloaderAction = () => {
  return async (dispatch) => {
    dispatch({ type: RELOADER_LOADING});
  };
};


