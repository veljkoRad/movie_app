import type { MediaListItem } from "./typesList";

export function getMediaTitle(item: MediaListItem): string {
  return "title" in item ? item.title : item.name;
}

export function getMediaYear(item: MediaListItem): string {
  if ("release_date" in item && item.release_date) {
    return item.release_date.slice(0, 4);
  }

  if ("first_air_date" in item && item.first_air_date) {
    return item.first_air_date.slice(0, 4);
  }

  return "N/A";
}

export function getMediaHref(item: MediaListItem): string {
  return item.media_type === "movie" ? `/movie/${item.id}` : `/tv/${item.id}`;
}

export function getPreferredImageUrl(
  item: MediaListItem,
  size: string,
): string {
  if (item.backdrop_path) {
    return `https://image.tmdb.org/t/p/${size}${item.backdrop_path}`;
  }

  if (item.poster_path) {
    return `https://image.tmdb.org/t/p/${size}${item.poster_path}`;
  }

  return "/placeholder.jpg";
}
