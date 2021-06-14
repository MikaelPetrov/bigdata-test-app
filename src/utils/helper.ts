import {
  TypeListMovies,
  TypeMovies,
  TypeTorrents,
} from '../components/pages/Movies/type';

export function toListMovies(response: TypeListMovies): TypeListMovies {
  return {
    movie_count: response.movie_count,
    movies: response.movies?.map((movie: TypeMovies) => ({
      background_image: movie.background_image,
      description_full: movie.description_full,
      genres: movie.genres,
      id: movie.id,
      language: movie.language,
      medium_cover_image: movie.medium_cover_image,
      rating: movie.rating,
      runtime: movie.runtime,
      slug: movie.slug,
      title_long: movie.title_long,
      torrents: movie.torrents?.map((torrent: TypeTorrents) => ({
        quality: torrent.quality,
        url: torrent.url,
      })),
      url: movie.url,
      year: movie.year,
    })),
  };
}

export function setMovieToLocalStorage(
  movie: TypeMovies,
  limit: number,
  page: number,
): void {
  localStorage.setItem('info', JSON.stringify(movie));
  localStorage.setItem('page', JSON.stringify(page));
  localStorage.setItem('limit', JSON.stringify(limit));
}

export function getMovieFromLocalStorage() {
  const movieInfo = {
    info: localStorage.getItem('info')
      ? JSON.parse(localStorage.getItem('info')!)
      : {},
    page: localStorage.getItem('page')
      ? JSON.parse(localStorage.getItem('page')!)
      : 0,
    limit: localStorage.getItem('limit')
      ? JSON.parse(localStorage.getItem('limit')!)
      : 0,
  };

  return movieInfo;
}

export function removeMovieFromLocalStorage(): void {
  localStorage.removeItem('info');
  localStorage.removeItem('page');
  localStorage.removeItem('limit');
}
