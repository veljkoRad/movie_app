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
    dragFree: false,
    skipSnaps: false,
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
      <div className="flex">
        {weekList.map((single) => (
          <section
            key={`${single.media_type}-${single.id}`}
            className="shrink-0 max-w-41 max-sm:max-w-25  flex flex-col gap-1 select-none mr-4 "
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${single.poster_path}`}
              alt={single.title || single.name || "Trending title"}
              width={164}
              height={72}
              className="rounded-2xl max-sm:min-w-25 min-w-41 select-none"
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
