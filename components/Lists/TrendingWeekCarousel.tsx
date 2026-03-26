"use client";

import type { Movie } from "@/lib/tmdb";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

type TrendingWeekCarouselProps = {
  weekList: Movie[];
};

/**
 * @description Render a single responsive trending-week list that is draggable below xl and static on xl+.
 * @param {TrendingWeekCarouselProps} props The weekly trending entries to render.
 * @returns {JSX.Element} A shared list markup with Embla enabled only on smaller breakpoints.
 */
export default function TrendingWeekCarousel({
  weekList,
}: TrendingWeekCarouselProps) {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
    duration: 55,
    breakpoints: {
      "(min-width: 1280px)": {
        active: false,
      },
    },
  });

  return (
    <div
      className="overflow-hidden xl:overflow-visible cursor-grab active:cursor-grabbing xl:cursor-default select-none xl:select-auto"
      ref={emblaRef}
    >
      <div className="flex gap-4">
        {weekList.map((single) => (
          <section
            key={`${single.media_type}-${single.id}`}
            className="shrink-0 w-25 sm:w-35 md:w-41 xl:w-41 flex flex-col gap-1 select-none xl:select-text"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${single.poster_path}`}
              alt={single.title || single.name || "Trending title"}
              width={164}
              height={72}
              className="rounded-2xl w-full select-none"
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
          </section>
        ))}
      </div>
    </div>
  );
}
