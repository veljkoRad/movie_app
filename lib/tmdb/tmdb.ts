const TMDB_BASE = "https://api.themoviedb.org/3";
import { TMDBListResponse, TrendingListItem } from "./typesList";

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

export async function searchResults(query: string, page = 1) {
  return tmdbFetch<TMDBListResponse<TrendingListItem>>("/search/multi", {
    query,
    page: String(page),
  });
}
