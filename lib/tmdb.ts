const TMDB_BASE = "https://api.themoviedb.org/3";

// Movie is object inside of TMDBListResponse
export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
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

export async function searchMovies(query: string) {
  return tmdbFetch<TMDBListResponse<Movie>>("/search/movie", {
    query,
  });
}

export async function getMovieDetails(id: string) {
  return tmdbFetch<Movie>(`/movie/${id}`);
}
