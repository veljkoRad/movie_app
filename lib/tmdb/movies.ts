import { tmdbFetch, TMDBListResponse, Movie } from "./tmdb";

export async function getDiscoverMovies(page = 1) {
  return tmdbFetch<TMDBListResponse<Movie>>("/discover/movie", {
    page: String(page),
  });
}

export async function getUpcomingMovies(page = 1) {
  return tmdbFetch<TMDBListResponse<Movie>>("/movie/upcoming", {
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
