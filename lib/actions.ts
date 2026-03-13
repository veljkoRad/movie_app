"use server";
import { searchMovies } from "./tmdb";

export async function searchMoviesAction(query: string) {
  const data = await searchMovies(query);
  return data.results;
}