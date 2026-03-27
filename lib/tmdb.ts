const TMDB_BASE = "https://api.themoviedb.org/3";

// Movie is object inside of TMDBListResponse
export type Movie = {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string | null;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  genre_ids: number[];
  media_type: "movie" | "tv" | "person";
};

export type TMDBListResponse<T> = {
  page: number;
  // value of " results" will be in this case Movie{}
  results: T[];
};

function getApiKey() {
  const key = process.env.TMDB_API_KEY;
  if (!key) throw new Error("TMDB_API_KEY is not set");
  return key;
}

export async function tmdbFetch<T>(
  path: string,
  params: Record<string, string> = {},
) {
  const url = new URL(`${TMDB_BASE}${path}`);
  url.searchParams.set("api_key", getApiKey());

  Object.entries(params).forEach(([key, value]) =>
    url.searchParams.set(key, value),
  );

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`TMDB request failed (${res.status})`);
  return res.json() as T;
}

export async function getPopularMovies(page = 1) {
  return tmdbFetch<TMDBListResponse<Movie>>("/movie/popular", {
    page: String(page),
  });
}

export async function getPopularShows(page = 1) {
  return tmdbFetch<TMDBListResponse<Movie>>("/tv/popular", {
    page: String(page),
  });
}

export async function searchMovies(query: string) {
  return tmdbFetch<TMDBListResponse<Movie>>("/search/movie", {
    query,
  });
}

export async function getMovieDetails(id: string) {
  return tmdbFetch<Movie>(`/movie/${id}`);
}

export async function getTvDetails(id: string) {
  return tmdbFetch<Movie>(`/tv/${id}`);
}

export async function getTrendingALL() {
  return tmdbFetch<TMDBListResponse<Movie>>(`/trending/all/day`);
}

export async function getTrendingALLWeek() {
  return tmdbFetch<TMDBListResponse<Movie>>(`/trending/all/week`);
}

export async function getTrendingMovies() {
  return tmdbFetch<TMDBListResponse<Movie>>(`/trending/movie/day`);
}

export async function getTrendingMoviesWeek() {
  return tmdbFetch<TMDBListResponse<Movie>>(`/trending/movie/week`);
}

export async function getTrendingTv() {
  return tmdbFetch<TMDBListResponse<Movie>>(`/trending/tv/day`);
}

export async function getTrendingTvWeek() {
  return tmdbFetch<TMDBListResponse<Movie>>(`/trending/tv/week`);
}

export async function getDiscoverMovies(page = 1) {
  return tmdbFetch<TMDBListResponse<Movie>>("/discover/movie", {
    page: String(page),
  });
}

export async function getDiscoverShows(page = 1) {
  return tmdbFetch<TMDBListResponse<Movie>>("/discover/tv", {
    page: String(page),
  });
}

export async function getUpcomingMovies(page = 1) {
  return tmdbFetch<TMDBListResponse<Movie>>("/movie/upcoming", {
    page: String(page),
  });
}

export async function getOnTheAirShows(page = 1) {
  return tmdbFetch<TMDBListResponse<Movie>>("/tv/on_the_air", {
    page: String(page),
  });
}

export async function getNowPlayingMovies(page = 1) {
  return tmdbFetch<TMDBListResponse<Movie>>("/movie/now_playing", {
    page: String(page),
  });
}

export async function getTopRatedMovies(page = 1) {
  return tmdbFetch<TMDBListResponse<Movie>>("/movie/top_rated", {
    page: String(page),
  });
}

export async function getTopRatedShows(page = 1) {
  return tmdbFetch<TMDBListResponse<Movie>>("/tv/top_rated", {
    page: String(page),
  });
}
