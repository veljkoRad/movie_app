"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Container from "../UI/Container";
import type { MovieListItem, TvListItem } from "@/lib/tmdb/typesList";

type CarouselItem = MovieListItem | TvListItem;
type ListCarouselProps = {
  items: CarouselItem[];
  type?: "movie" | "show";
  title: string;
};

const getItemTitle = (item: CarouselItem): string => {
  return "title" in item ? item.title : item.name;
};

const checkTrendingType = (single: CarouselItem, type?: "movie" | "show") => {
  if (type) {
    return type === "movie" ? `/movie/${single.id}` : `/tv/${single.id}`;
  } else {
    if (single.media_type === "movie") {
      return `/movie/${single.id}`;
    } else if (single.media_type === "tv") {
      return `/tv/${single.id}`;
    } else {
      return "name" in single ? `/tv/${single.id}` : `/movie/${single.id}`;
    }
  }
};

export default function ListCarousel({
  items,
  type,
  title,
}: ListCarouselProps) {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
    breakpoints: {
      "(min-width: 1280px)": {
        active: false,
      },
    },
  });

  return (
    <Container>
      <h2 className="text-xl font-bold">{title}</h2>
      <div
        className="mt-4 overflow-hidden xl:overflow-visible cursor-grab  active:cursor-grabbing xl:cursor-default select-none xl:select-auto"
        ref={emblaRef}
      >
        <div className="flex">
          {items.map((single) => {
            return (
              <Link
                href={checkTrendingType(single, type)}
                key={`${single.media_type}-${single.id}`}
                className="shrink-0 max-w-41 max-sm:max-w-25  flex flex-col gap-1 select-none mr-4 aspect-[2/3] "
              >
                <Image
                  src={
                    single.poster_path
                      ? `https://image.tmdb.org/t/p/w185${single.poster_path}`
                      : "/placeholder.jpg"
                  }
                  alt={getItemTitle(single) || "Trending title"}
                  width={185}
                  height={278}
                  className="rounded-2xl  select-none "
                  draggable={false}
                />
                <div className="flex flex-col gap-0.5 max-sm:hidden">
                  <p className="text-sm font-medium">{getItemTitle(single)}</p>
                  <p className="text-xs text-secondary font-medium">
                    ★
                    {single.vote_average > 0
                      ? single.vote_average.toFixed(1)
                      : "N/A"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
