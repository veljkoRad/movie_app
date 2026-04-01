import { tmdbFetch } from "./tmdb";
import { TMDBListResponse, TvListItem, Single, People } from "./typesList";

export async function getPopularShows(page = 1) {
  return tmdbFetch<TMDBListResponse<TvListItem>>("/tv/popular", {
    page: String(page),
  });
}
export async function getPeopleShow(id: string) {
  return tmdbFetch<{ cast: People[] }>(`/tv/${id}/credits`);
}

export async function getTvDetails(id: string) {
  return tmdbFetch<Single>(`/tv/${id}`);
}

export async function getSimilarShows(id: string, page = 1) {
  return tmdbFetch<TMDBListResponse<TvListItem>>(`/tv/${id}/similar`, {
    page: String(page),
  });
}

export async function getRecommendedShows(id: string, page = 1) {
  return tmdbFetch<TMDBListResponse<TvListItem>>(`/tv/${id}/recommendations`, {
    page: String(page),
  });
}

export async function getDiscoverShows(page = 1) {
  return tmdbFetch<TMDBListResponse<TvListItem>>("/discover/tv", {
    page: String(page),
  });
}

export async function getOnTheAirShows(page = 1) {
  return tmdbFetch<TMDBListResponse<TvListItem>>("/tv/on_the_air", {
    page: String(page),
  });
}

export async function getTopRatedShows(page = 1) {
  return tmdbFetch<TMDBListResponse<TvListItem>>("/tv/top_rated", {
    page: String(page),
  });
}
