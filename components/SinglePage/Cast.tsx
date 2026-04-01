"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { People as Person } from "@/lib/tmdb/typesList";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Cast({ people }: { people: Person[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
    breakpoints: {
      "(min-width: 1024px)": {
        watchDrag: false, // desktop: no drag
        dragFree: false,
      },
    },
  });

  // Arrows logic
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  // function to show or hide arrows
  const updateArrows = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // useEffect to update arrows when emblaApi changes
  useEffect(() => {
    if (!emblaApi) return;
    updateArrows();
    emblaApi.on("select", updateArrows);
    return () => {
      emblaApi.off("select", updateArrows);
    };
  }, [emblaApi, updateArrows]);
  return (
    <section className="mt-20">
      <h2 className="text-xl font-bold">Cast</h2>
      <div className="relative mt-4">
        {/* Mobile scroll hint (right edge fade) */}
        <div className="lg:hidden pointer-events-none absolute right-0 top-0 h-full w-18 bg-gradient-to-l from-black to-transparent z-[55]" />
        {/* Desktop-only arrows */}
        {canPrev && (
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-[100%] z-10 bg-black/70 rounded-full p-2 group"
            aria-label="Scroll cast left"
          >
            <ChevronLeft
              size={50}
              className="group-hover:text-blue transition-all duration-300 ease-in-out"
            />
          </button>
        )}
        {canNext && (
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-[100%] z-10 bg-black/70 rounded-full p-2 group"
            aria-label="Scroll cast right"
          >
            <ChevronRight
              size={50}
              className="group-hover:text-blue transition-all duration-300 ease-in-out"
            />
          </button>
        )}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {people.map((single) => (
              <div
                key={single.id}
                className="w-38 max-md:w-24 shrink-0 rounded-lg"
              >
                <Image
                  src={
                    single.profile_path
                      ? `https://image.tmdb.org/t/p/w185${single.profile_path}`
                      : "/placeholder.jpg"
                  }
                  alt={single.name}
                  width={185}
                  height={278}
                  className="rounded-full h-38 max-md:h-24  object-cover object-center"
                />
                <div className="p-2 text-center">
                  <div className="text-md max-md:text-sm font-bold">
                    {single.name}
                  </div>
                  <div className="text-sm max-md:text-xs text-secondary">
                    {single.character}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
