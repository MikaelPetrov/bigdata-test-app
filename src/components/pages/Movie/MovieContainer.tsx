import { memo, useState } from 'react';
import Movie from '.';
import { getMovieFromLocalStorage } from '../../../utils/helper';
import { TypeComments } from './type';

const MovieContainer: React.FC = () => {
  const [comments, setComments] = useState<TypeComments[]>([]);

  const movieInfo = getMovieFromLocalStorage();

  return (
    <Movie
      info={movieInfo.info}
      page={movieInfo.page}
      limit={movieInfo.limit}
      comments={comments}
      setComments={setComments}
    />
  );
};

export default memo(MovieContainer);
