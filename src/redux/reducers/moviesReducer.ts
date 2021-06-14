import { instance } from '../../api/api';
import { TypeListMovies, TypeMovies } from '../../components/pages/Movies/type';
import { toListMovies } from '../../utils/helper';
import { InferActionsType, InferThunksType } from '../reduxStore';
import { SET_LIST_MOVIES } from './actions';

type TypeInitialState = typeof initialState;
type TypeAction = InferActionsType<typeof actions>;
type TypeThunk = InferThunksType<TypeAction>;

const initialState = {
  listMovies: {
    movie_count: 1 as number,
    movies: [] as TypeMovies[],
  },
};

const moviesReducer = (
  state = initialState,
  action: TypeAction,
): TypeInitialState => {
  switch (action.type) {
    case SET_LIST_MOVIES:
      return { ...state, listMovies: action.payload };
    default:
      return state;
  }
};

export const actions = {
  setListMovies: (listMovies: TypeListMovies) =>
    ({
      type: SET_LIST_MOVIES,
      payload: listMovies,
    } as const),
};

export const thunks = {
  getListMovies:
    (page: number, limit: number): TypeThunk =>
    async (dispatch) => {
      const queryConfig = {
        params: {
          page,
          limit,
        },
      };
      const response = await instance.get(``, queryConfig);
      const listMovies = toListMovies(response.data.data);
      dispatch(actions.setListMovies(listMovies));
    },
};

export default moviesReducer;
