"use client";

import type { Movie } from "@/lib/tmdb";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

type ListCarouselProps = {
  weekList: Movie[];
};

export default function ListCarousel({ weekList }: ListCarouselProps) {
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
    <div
      className="overflow-hidden xl:overflow-visible cursor-grab  active:cursor-grabbing xl:cursor-default select-none xl:select-auto"
      ref={emblaRef}
    >
      <div className="flex">
        {weekList.map((single) => (
          <Link
            href={
              single.media_type === "movie"
                ? `/movie/${single.id}`
                : `/tv/${single.id}`
            }
            key={`${single.media_type}-${single.id}`}
            className="shrink-0 max-w-41 max-sm:max-w-25  flex flex-col gap-1 select-none mr-4 aspect-[2/3] "
          >
            <Image
              src={
                single.poster_path
                  ? `https://image.tmdb.org/t/p/w185${single.poster_path}`
                  : "/placeholder.jpg"
              }
              alt={single.title || single.name || "Trending title"}
              width={185}
              height={278}
              className="rounded-2xl  select-none "
              draggable={false}
            />
            <div className="flex flex-col gap-0.5 max-sm:hidden">
              <p className="text-xs text-secondary">
                ★{" "}
                {single.vote_average > 0
                  ? single.vote_average.toFixed(1)
                  : "N/A"}
              </p>
              <p className="text-sm font-medium">
                {single.title || single.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
