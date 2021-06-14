import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Movies from '.';
import { Page, paths } from '../../../core/routes/constants';
import { thunks } from '../../../redux/reducers/moviesReducer';
import { TypeAppState } from '../../../redux/reduxStore';

const MoviesContainer: React.FC = () => {
  const dispatch = useDispatch();
  const moviesState = useSelector((state: TypeAppState) => ({
    listMovies: state.moviesPage.listMovies,
  }));

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = query.get(`page`) ?? 1;
  const limit = query.get(`limit`) ?? 20;

  useEffect(() => {
    if (location.pathname === paths[Page.MOVIES]) {
      dispatch(thunks.getListMovies(+page, +limit));
    }
  }, [dispatch, location.pathname, page, limit]);

  return (
    <Movies page={+page} limit={+limit} listMovies={moviesState.listMovies} />
  );
};

export default memo(MoviesContainer);
