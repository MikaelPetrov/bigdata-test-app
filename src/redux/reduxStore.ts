import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import moviesReducer from './reducers/moviesReducer';

const rootReducer = combineReducers({
  moviesPage: moviesReducer,
  // homePage: homeReducer,
  // and etc...
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

type TypeRootReducer = typeof rootReducer;
export type TypeDispatch = typeof store.dispatch;
export type TypeAppState = ReturnType<TypeRootReducer>;
export type InferThunksType<
  A extends Action = Action,
  R = Promise<void>,
> = ThunkAction<R, TypeAppState, unknown, A>;
export type InferActionsType<T> = T extends {
  [key: string]: (...args: any) => infer U;
}
  ? U
  : never;

export default store;
