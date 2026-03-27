import { tmdbFetch, TMDBListResponse, Movie } from "./tmdb";

export async function getTrendingAllDay() {
  return tmdbFetch<TMDBListResponse<Movie>>(`/trending/all/day`);
}

export async function getTrendingAllWeek() {
  return tmdbFetch<TMDBListResponse<Movie>>(`/trending/all/week`);
}

export async function getTrendingMoviesDay() {
  return tmdbFetch<TMDBListResponse<Movie>>(`/trending/movie/day`);
}

export async function getTrendingMoviesWeek() {
  return tmdbFetch<TMDBListResponse<Movie>>(`/trending/movie/week`);
}

export async function getTrendingTvDay() {
  return tmdbFetch<TMDBListResponse<Movie>>(`/trending/tv/day`);
}

export async function getTrendingTvWeek() {
  return tmdbFetch<TMDBListResponse<Movie>>(`/trending/tv/week`);
}
