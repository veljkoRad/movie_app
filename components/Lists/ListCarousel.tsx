"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Container from "../UI/Container";
import type { MovieListItem, TvListItem } from "@/lib/tmdb/typesList";
import { ChevronRight } from "lucide-react";

type CarouselItem = MovieListItem | TvListItem;
type ListCarouselProps = {
  items: CarouselItem[];
  type?: "movie" | "show";
  title: string;
  browse?: string;
};

export default function ListCarousel({
  items,
  title,
  type,
  browse,
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

  const checkType = (single: CarouselItem) => {
    if (single.media_type) {
      if (single.media_type === "movie") {
        return `/movie/${single.id}`;
      } else {
        return `/tv/${single.id}`;
      }
    } else {
      if (type === "movie") {
        return `/movie/${single.id}`;
      } else {
        return `/tv/${single.id}`;
      }
    }
  };

  return (
    <Container>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{title}</h2>
        {browse && (
          <Link
            href={`/${type === "movie" ? "movies" : "shows"}/${browse}`}
            className="flex gap-1 items-center hover:text-blue transition-all duration-300 cursor-pointer"
          >
            <p className="text-sm font-medium">See All</p>
            <ChevronRight size={20} />
          </Link>
        )}
      </div>
      <div
        className="mt-4 overflow-hidden xl:overflow-visible cursor-grab  active:cursor-grabbing xl:cursor-default select-none xl:select-auto"
        ref={emblaRef}
      >
        <div className="flex">
          {items.map((single) => {
            return (
              <Link
                href={checkType(single)}
                key={single.id}
                className="shrink-0 max-w-41 max-sm:max-w-25  flex flex-col gap-1 select-none mr-4 aspect-[2/3] "
              >
                <Image
                  src={
                    single.poster_path
                      ? `https://image.tmdb.org/t/p/w185${single.poster_path}`
                      : "/placeholder.jpg"
                  }
                  alt={"title" in single ? single.title : single.name}
                  width={185}
                  height={278}
                  className="rounded-2xl  select-none "
                  draggable={false}
                />
                <div className="flex flex-col gap-0.5 max-sm:hidden">
                  <p className="text-sm font-medium">
                    {"title" in single ? single.title : single.name}
                  </p>
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
