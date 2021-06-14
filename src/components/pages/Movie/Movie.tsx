import { Form, Input } from 'antd';
import { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { Page, paths } from '../../../core/routes/constants';
import Button from '../../uiKit/Button';
import Img from '../../uiKit/Img';
import { TypeMovies } from '../Movies/type';
import {
  MovieCommentary,
  MovieDescription,
  MovieFormButtons,
  MovieGenre,
  MovieGenres,
  MovieInfo,
  MovieTitle,
  MovieWrapper,
  resetButton,
  submitButton,
} from './style';
import { TypeComments } from './type';

const { TextArea } = Input;

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
};
/* eslint-enable no-template-curly-in-string */

type Props = {
  info: TypeMovies;
  page: number;
  limit: number;
  comments: TypeComments[];
  setComments: React.Dispatch<React.SetStateAction<TypeComments[]>>;
};

const Movie: React.FC<Props> = (props) => {
  const history = useHistory();

  function backToListMovies(): void {
    history.push({
      pathname: paths[Page.MOVIES],
      search: `?page=${props.page}&limit=${props.limit}`,
    });
  }

  function onFinish(values: any): void {
    const comment = {
      id: props.comments.length,
      texts: values.comment,
    };
    props.setComments((prevState) => prevState.concat(comment));
  }

  function deleteComment(id: number): void {
    // not have api for POST and DELETE...
    props.setComments((prevState) =>
      prevState.filter((comment) => comment.id !== id),
    );
  }

  return (
    <MovieWrapper data-name="movie-wrapper">
      <MovieInfo data-name="movie-info">
        <Img src={props.info.medium_cover_image} />
        <div>
          <>Available in: </>
          {props.info.torrents.map((torrent) => (
            <div key={torrent.quality}>
              <a
                rel="nofollow"
                href={torrent.url}
                title={`Download ${props.info.title_long} ${torrent.quality}`}
              >
                {torrent.quality + '.WEB'}
              </a>
            </div>
          ))}
          <>Rating: </>
          <>{props.info.rating}</>
        </div>
      </MovieInfo>
      <MovieTitle data-name="movie-title">
        <>{props.info.title_long}</>
        <MovieGenres data-name="movie-genres">
          {props.info.genres.map((genre) => (
            <MovieGenre key={genre} data-name="movie-genre">
              {genre}
            </MovieGenre>
          ))}
        </MovieGenres>
      </MovieTitle>
      <MovieDescription data-name="movie-description">
        {props.info.description_full}
      </MovieDescription>
      <Form onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item label="Comment" name="comment" rules={[{ required: true }]}>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <MovieFormButtons data-name="movie-form-buttons">
            <Button {...submitButton}>Submit</Button>
            <Button onClick={backToListMovies} {...resetButton}>
              Reset
            </Button>
          </MovieFormButtons>
        </Form.Item>
      </Form>
      {props.comments.map((comment) => (
        <MovieCommentary key={comment.id} data-name="movies-commentary">
          <>{comment.texts}</>
          <div
            onClick={() => deleteComment(comment.id)}
            style={{ cursor: 'pointer' }}
          >
            (del)
          </div>
        </MovieCommentary>
      ))}
    </MovieWrapper>
  );
};

export default memo(Movie);
