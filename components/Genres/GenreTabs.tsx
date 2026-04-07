"use client";
import Container from "../UI/Container";
import { genresMovies, genresShows } from "@/lib/genreCards";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

export default function GenreTabs({ media }: { media: "movies" | "shows" }) {
  const genreCards = media === "movies" ? genresMovies : genresShows;
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
  });
  return (
    <Container>
      <p className="text-xl text-primary font-semibold">Find by genre</p>
      <div
        className=" overflow-hidden cursor-grab  active:cursor-grabbing select-none mt-4  "
        ref={emblaRef}
      >
        <div className="flex gap-4 max-sm:gap-2 ">
          {genreCards.map((genre) => (
            <Link
              href={`/${media}/genre/${genre.id}`}
              key={genre.id}
              className="bg-card flex items-center gap-2 shrink-0 px-3 py-2 border-2 border-bor rounded-full text-sm max-sm:text-xs text-white font-medium"
            >
              {genre.icon}
              <h2>{genre.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
