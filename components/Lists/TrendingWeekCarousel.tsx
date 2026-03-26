"use client";

import type { Movie } from "@/lib/tmdb";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

type TrendingWeekCarouselProps = {
  weekList: Movie[];
};

export default function TrendingWeekCarousel({
  weekList,
}: TrendingWeekCarouselProps) {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });

  return (
    <div
      className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
      ref={emblaRef}
    >
      <div className="flex gap-4">
        {weekList.map((single) => (
          <section
            key={`${single.media_type}-${single.id}`}
            className="shrink-0 w-25 sm:w-35 md:w-41 flex flex-col gap-1 select-none"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${single.poster_path}`}
              alt={single.title || single.name || "Trending title"}
              width={164}
              height={72}
              className="rounded-2xl w-full select-none"
              draggable={false}
            />
            <div className="flex flex-col gap-0.5">
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
