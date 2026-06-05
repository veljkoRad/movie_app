// We separate this because of loading state

import Container from "@/components/UI/Container";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import {
  getPopularMovies,
  getDiscoverMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getNowPlayingMovies,
} from "@/lib/tmdb/movies";
import { getTrendingTvWeek, getTrendingMoviesWeek } from "@/lib/tmdb/trending";
import {
  getPopularShows,
  getDiscoverShows,
  getTopRatedShows,
  getOnTheAirShows,
} from "@/lib/tmdb/shows";
import type { MovieListItem, TvListItem } from "@/lib/tmdb/typesList";

const movieLists = {
  popular: getPopularMovies,
  discover: getDiscoverMovies,
  "top-rated": getTopRatedMovies,
  upcoming: getUpcomingMovies,
  "now-playing": getNowPlayingMovies,
  trending: getTrendingMoviesWeek,
} as const;

const showLists = {
  popular: getPopularShows,
  discover: getDiscoverShows,
  "top-rated": getTopRatedShows,
  "on-the-air": getOnTheAirShows,
  trending: getTrendingTvWeek,
} as const;

function getItemHref(
  item: MovieListItem | TvListItem,
  media: "movies" | "shows",
) {
  return media === "movies"
    ? `/movies/single/${item.id}`
    : `/shows/single/${item.id}`;
}

function getItemTitle(item: MovieListItem | TvListItem) {
  return "title" in item ? item.title : item.name;
}
export default async function CategoryResult({
  page,
  media,
  list,
}: {
  page: number;
  media: string;
  list: string;
}) {
  const currentPage = Math.max(1, Number(page ?? "1") || 1);

  if (media !== "movies" && media !== "shows") notFound();

  const fetcher =
    media === "movies"
      ? movieLists[list as keyof typeof movieLists]
      : showLists[list as keyof typeof showLists];

  if (!fetcher) notFound();

  const data = await fetcher(currentPage);
  const results = data.results;
  const totalPages = data.total_pages;
  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-4 capitalize">
        {list.replace("-", " ")} {media}
      </h1>

      <div className="flex flex-wrap gap-4 pt-8 justify-center">
        {results.map((item) => (
          <Link
            key={item.id}
            href={getItemHref(item, media)}
            className="flex flex-col gap-2 w-57 max-md:w-37.5 max-sm:w-22.5 mb-16 max-sm:mb-4"
          >
            <Image
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
                  : "/placeholder.jpg"
              }
              alt={getItemTitle(item)}
              width={256}
              height={384}
              className="object-cover rounded-lg h-85.5 max-md:h-56.25 max-sm:h-33.75 hover:scale-105 transition-all duration-300 "
              placeholder={item.poster_path ? "blur" : "empty"}
              blurDataURL={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w92${item.poster_path}`
                  : undefined
              }
            />
            <p className="font-semibold max-sm:hidden">{getItemTitle(item)}</p>
          </Link>
        ))}
      </div>

      <div className="flex justify-center gap-4   max-sm:mt-4">
        {currentPage > 1 && (
          <Link
            href={`/${media}/${list}?page=${currentPage - 1}`}
            className="px-5 py-1 rounded-xl border-2 border-bor  hover:text-blue transition-all duration-300 "
          >
            <ChevronLeft size={30} />
          </Link>
        )}
        {currentPage < totalPages && (
          <Link
            href={`/${media}/${list}?page=${currentPage + 1}`}
            className="px-5 py-1 rounded-xl border-2 border-bor  hover:text-blue transition-all duration-300  "
          >
            <ChevronRight size={30} />
          </Link>
        )}
      </div>
    </Container>
  );
}
