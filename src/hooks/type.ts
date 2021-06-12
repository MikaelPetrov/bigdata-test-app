export type TypeTorrents = {
  quality: string;
  url: string;
};

export type TypeMovies = {
  background_image: string;
  description_full: string;
  genres: string[];
  id: number;
  language: string;
  large_cover_image: string;
  rating: number;
  runtime: number;
  slug: string;
  title_long: string;
  torrents: TypeTorrents[];
  url: string;
  year: number;
};

export type TypeListMovies = {
  movie_count: number;
  movies: TypeMovies[];
};

export type TypeUseGetListMovies = {
  page: number;
  limit: number;
  listMovies: null | TypeListMovies;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
};
