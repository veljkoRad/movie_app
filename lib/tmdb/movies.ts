import { tmdbFetch } from "./tmdb";
import { TMDBListResponse, MovieListItem, Single, People } from "./typesList";

export async function getMovieDetails(id: string) {
  return tmdbFetch<Single>(`/movie/${id}`);
}

export async function getPeopleMovie(id: string) {
  return tmdbFetch<{ cast: People[] }>(`/movie/${id}/credits`);
}

export async function getSimilarMovies(id: string, page = 1) {
  return tmdbFetch<TMDBListResponse<MovieListItem>>(`/movie/${id}/similar`, {
    page: String(page),
  });
}

export async function getRecommendedMovies(id: string, page = 1) {
  return tmdbFetch<TMDBListResponse<MovieListItem>>(
    `/movie/${id}/recommendations`,
    {
      page: String(page),
    },
  );
}

export async function getPopularMovies(page = 1) {
  return tmdbFetch<TMDBListResponse<MovieListItem>>("/movie/popular", {
    page: String(page),
  });
}

export async function getDiscoverMovies(page = 1) {
  return tmdbFetch<TMDBListResponse<MovieListItem>>("/discover/movie", {
    page: String(page),
  });
}

export async function getUpcomingMovies(page = 1) {
  return tmdbFetch<TMDBListResponse<MovieListItem>>("/movie/upcoming", {
    page: String(page),
  });
}

export async function getNowPlayingMovies(page = 1) {
  return tmdbFetch<TMDBListResponse<MovieListItem>>("/movie/now_playing", {
    page: String(page),
  });
}

export async function getTopRatedMovies(page = 1) {
  return tmdbFetch<TMDBListResponse<MovieListItem>>("/movie/top_rated", {
    page: String(page),
  });
}

export async function getMoviesByGenre(genreId: string, page = 1) {
  return tmdbFetch<TMDBListResponse<MovieListItem>>("/discover/movie", {
    with_genres: genreId,
    page: String(page),
  });
}
