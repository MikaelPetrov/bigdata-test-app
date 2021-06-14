import { Select } from 'antd';
import 'antd/dist/antd.css';
import { memo, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Page, paths } from '../../../core/routes/constants';
import { setMovieToLocalStorage } from '../../../utils/helper';
import Button from '../../uiKit/Button';
import Img from '../../uiKit/Img';
import { moviesLimit } from './constants';
import { getRangePages } from './helper';
import {
  activatedButton,
  MovieItem,
  moviesImageStyles,
  MoviesLimiter,
  MoviesList,
  MoviesPagination,
  MoviesWrapper,
  passivatedButton,
} from './style';
import { TypeListMovies, TypeMovies } from './type';

const { Option } = Select;

type Props = {
  page: number;
  limit: number;
  listMovies: TypeListMovies;
};

const Movies: React.FC<Props> = (props) => {
  const history = useHistory();
  const [leftPortion, setLeftPortion] = useState(1);
  const [rightPortion, setRightPortion] = useState(5);

  const pagesCount = Math.ceil(props.listMovies.movie_count / props.limit);
  const pages: number[] = [];
  for (let i = 1; i <= pagesCount; i++) pages.push(i);

  function handleChangeLimit(value: number): void {
    history.push({
      pathname: paths[Page.MOVIES],
      search: `?page=${props.page}&limit=${value}`,
    });
  }

  function handleChangePage(page: number): void {
    getRangePages(page, pagesCount, setLeftPortion, setRightPortion);

    history.push({
      pathname: paths[Page.MOVIES],
      search: `?page=${page}&limit=${props.limit}`,
    });
  }

  function getMovieInfo(id: number, movie: TypeMovies): void {
    setMovieToLocalStorage(movie, props.limit, props.page);
    history.push(paths[Page.MOVIES] + `/${id}`);
  }

  useEffect(() => {
    if (props.page > pagesCount) {
      history.push({
        pathname: paths[Page.MOVIES],
        search: `?page=${pagesCount}&limit=${props.limit}`,
      });
      setLeftPortion(pagesCount - 4);
    }
  }, [history, pagesCount, props.page, props.limit]);

  useEffect(() => {
    getRangePages(props.page, pagesCount, setLeftPortion, setRightPortion);
  }, [props.page, pagesCount]);

  return (
    <MoviesWrapper data-name="movies-wrapper">
      <MoviesLimiter data-name="movies-limiter">
        <Select
          onChange={handleChangeLimit}
          defaultValue={props.limit}
          style={{ width: 120 }}
        >
          {moviesLimit.map((limit) => (
            <Option key={limit.key} value={limit.value}>
              {limit.name}
            </Option>
          ))}
        </Select>
      </MoviesLimiter>
      <MoviesList data-name="movies-list">
        {props.listMovies.movies?.map((movie) => (
          <MovieItem
            onClick={() => getMovieInfo(movie.id, movie)}
            key={movie.id}
            data-name="movie-item"
          >
            <Img src={movie.medium_cover_image} {...moviesImageStyles} />
            <span>{movie.title_long}</span>
          </MovieItem>
        ))}
      </MoviesList>
      <MoviesPagination data-name="movies-pagination">
        {props.page > 1 && (
          <>
            <Button {...passivatedButton} onClick={() => handleChangePage(1)}>
              {'<<'}
            </Button>
            <Button
              {...passivatedButton}
              onClick={() => handleChangePage(props.page - 1)}
            >
              {'<'}
            </Button>
          </>
        )}
        {pages
          .filter((page) => page >= leftPortion && page <= rightPortion)
          .map((page) => (
            <div key={page} onClick={() => handleChangePage(page)}>
              {page === props.page ? (
                <Button {...activatedButton}>{`${page}`}</Button>
              ) : (
                <Button {...passivatedButton}>{`${page}`}</Button>
              )}
            </div>
          ))}
        {props.page < pagesCount && (
          <>
            <Button
              {...passivatedButton}
              onClick={() => handleChangePage(props.page + 1)}
            >
              {'>'}
            </Button>
            <Button
              {...passivatedButton}
              onClick={() => handleChangePage(pagesCount)}
            >
              {'>>'}
            </Button>
          </>
        )}
      </MoviesPagination>
    </MoviesWrapper>
  );
};

export default memo(Movies);
