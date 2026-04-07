// Movie is object inside of TMDBListResponse

export type TMDBListResponse<T> = {
  page: number;
  // value of " results" will be in this case Movie{}
  results: T[];
  total_pages: number;
};

type BaseListItem = {
  id: number;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  genre_ids: number[];
};
export type MovieListItem = BaseListItem & {
  title: string;
  release_date?: string;
  media_type?: "movie";
};
export type TvListItem = BaseListItem & {
  name: string;
  first_air_date?: string;
  media_type?: "tv";
};
export type TrendingListItem =
  | (MovieListItem & { media_type: "movie" })
  | (TvListItem & { media_type: "tv" });

type Genre = {
  id: number;
  name: string;
};

export type Single = {
  id: number;
  name?: string;
  title?: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  genres: Genre[];
  tagline: string;
  original_language: string;
  runtime?: number;
  number_of_seasons?: number;
};

export type People = {
  id: number;
  profile_path: string | null;
  character: string;
  name: string;
};
