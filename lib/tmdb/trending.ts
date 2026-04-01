import { tmdbFetch } from "./tmdb";
import {
  TMDBListResponse,
  TrendingListItem,
  MovieListItem,
  TvListItem,
} from "./typesList";

export async function getTrendingAllDay() {
  return tmdbFetch<TMDBListResponse<TrendingListItem>>(`/trending/all/day`);
}

export async function getTrendingAllWeek() {
  return tmdbFetch<TMDBListResponse<TrendingListItem>>(`/trending/all/week`);
}

export async function getTrendingMoviesDay() {
  return tmdbFetch<TMDBListResponse<MovieListItem>>(`/trending/movie/day`);
}

export async function getTrendingMoviesWeek() {
  return tmdbFetch<TMDBListResponse<MovieListItem>>(`/trending/movie/week`);
}

export async function getTrendingTvDay() {
  return tmdbFetch<TMDBListResponse<TvListItem>>(`/trending/tv/day`);
}

export async function getTrendingTvWeek() {
  return tmdbFetch<TMDBListResponse<TvListItem>>(`/trending/tv/week`);
}
