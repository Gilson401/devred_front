import { RELOADER_LOADING } from "./reloader.action";

const INITIAL_STATE = {
  loading: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RELOADER_LOADING:
      state.loading = !state.loading;
      return state;
    default:
      return state;
  }
};


//NO componente que precisa ser recarregado
//      const reloader = useSelector(state => state.reloader.loading)
//      reloader no array de useefect
//Na função que precisa disparar a atualização:
//      dispatch(reloaderAction())
export default reducer;
