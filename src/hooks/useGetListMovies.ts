import { useEffect, useState } from 'react';
import { instance } from '../api/api';
import {
  TypeListMovies,
  TypeMovies,
  TypeTorrents,
  TypeUseGetListMovies,
} from './type';

export function useGetListMovies(): TypeUseGetListMovies {
  const [page, setPage] = useState<number>(2);
  const [limit, setLimit] = useState<number>(10);
  const [listMovies, setListMovies] = useState<null | TypeListMovies>(null);

  async function getListMovies(): Promise<void> {
    try {
      const response = await instance.get(`?page=${page}&limit=${limit}`);
      setListMovies({
        movie_count: response.data.data.movie_count,
        movies: response.data.data.movies.map((movie: TypeMovies) => ({
          background_image: movie.background_image,
          description_full: movie.description_full,
          genres: movie.genres,
          id: movie.id,
          language: movie.language,
          large_cover_image: movie.large_cover_image,
          rating: movie.rating,
          runtime: movie.runtime,
          slug: movie.slug,
          title_long: movie.title_long,
          torrents: movie.torrents.map((torrent: TypeTorrents) => ({
            quality: torrent.quality,
            url: torrent.url,
          })),
          url: movie.url,
          year: movie.year,
        })),
      });
    } catch (error) {
      console.error();
    }
  }

  useEffect(() => {
    getListMovies();
  }, [page, limit]);

  return {
    page,
    limit,
    listMovies,
    setPage,
    setLimit,
  };
}
