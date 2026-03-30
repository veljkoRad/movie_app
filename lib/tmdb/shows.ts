import { tmdbFetch, TMDBListResponse, Movie, Single } from "./tmdb";

export async function getPopularShows(page = 1) {
  return tmdbFetch<TMDBListResponse<Movie>>("/tv/popular", {
    page: String(page),
  });
}

export async function getTvDetails(id: string) {
  return tmdbFetch<Single>(`/tv/${id}`);
}

export async function getDiscoverShows(page = 1) {
  return tmdbFetch<TMDBListResponse<Movie>>("/discover/tv", {
    page: String(page),
  });
}

export async function getOnTheAirShows(page = 1) {
  return tmdbFetch<TMDBListResponse<Movie>>("/tv/on_the_air", {
    page: String(page),
  });
}

export async function getTopRatedShows(page = 1) {
  return tmdbFetch<TMDBListResponse<Movie>>("/tv/top_rated", {
    page: String(page),
  });
}
