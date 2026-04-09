import Link from "next/link";
import Carousel from "./Carousel";
import { genres } from "@/lib/genres";
import type { TrendingListItem } from "@/lib/tmdb/typesList";
import { ChevronsRight, CornerUpRight } from "lucide-react";

export default function BannerSlide({ list }: { list: TrendingListItem[] }) {
  return (
    <section className="min-w-0">
      <Carousel>
        {list.map((single) => (
          <div
            key={single.id}
            className="w-full h-[462px] max-lg:h-auto max-lg:aspect-[16/9] max-sm:aspect-[4/3] bg-cover bg-center rounded-[40px] p-6 flex items-end"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), transparent), url(https://image.tmdb.org/t/p/w1280${single.backdrop_path ?? ""})`,
            }}
          >
            <section className="max-sm:flex-col flex max-sm:gap-2 justify-between max-sm:items-start items-center w-full">
              <div className="text-white flex flex-col gap-3 items-start">
                <article className="flex gap-5 items-center">
                  {Array.isArray(single.genre_ids) &&
                  single.genre_ids.length > 0 ? (
                    <div className="flex gap-2 max-sm:hidden">
                      {single.genre_ids
                        .slice(0, 2)
                        .map((id) => genres[id as keyof typeof genres])
                        .filter(Boolean)
                        .map((genre) => (
                          <span
                            key={genre}
                            className="text-white text-xs inline-flex px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md "
                          >
                            {genre}
                          </span>
                        ))}
                    </div>
                  ) : null}
                </article>
                <h1 className="max-sm:text-2xl text-4xl font-semibold tracking-wide leading-tight">
                  {single.media_type === "movie" ? single.title : single.name}
                </h1>
                <p className="text-white/70 text-sm max-sm:hidden font-medium  max-w-[65ch]">
                  {single.overview.length > 200
                    ? single.overview.slice(0, 200) + "..."
                    : single.overview}
                </p>
                <Link
                  href={`${single.media_type === "movie" ? "/movies" : "/shows"}/single/${single.id}`}
                  className=" flex items-center justify-flex-start gap-0.5 max-sm:px-2 px-4 max-sm:py-2 py-2.5 bg-white text-sm max-sm:text-xs text-card font-bold  rounded-lg   hover:scale-105 transition-all duration-300 "
                >
                  Explore
                  <ChevronsRight className="w-4 h-auto" />
                </Link>
              </div>
              <div>
                <div className="font-semibold mt-1 max-lg:hidden text-xl text-white tracking-wider">
                  ⭐
                  {single.vote_average > 0
                    ? single.vote_average.toFixed(1)
                    : "N/A"}
                  <span className="text-white/80 text-sm">/10</span>
                </div>
              </div>
            </section>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
