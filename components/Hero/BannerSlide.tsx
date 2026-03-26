import Link from "next/link";
import { Maximize2 } from "lucide-react";
import Carousel from "./Carousel";
import { genres } from "@/lib/genres";
import { Movie } from "@/lib/tmdb";

export default function BannerSlide({ list }: { list: Movie[] }) {
  return (
    <section className=" max-w-216 min-w-0">
      <Carousel>
        {list.map((single) => (
          <div
            key={single.id}
            className="w-full max-w-216  max-md:h-55 h-90 bg-cover bg-center rounded-[40px] p-6 flex items-end"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), transparent), url(${single.poster_path ? `https://image.tmdb.org/t/p/w780${single.poster_path}` : "/placeholder.jpg"})`,
            }}
          >
            <section className="max-sm:flex-col flex max-sm:gap-2 justify-between max-sm:items-start items-center w-full">
              <div className="text-white flex flex-col gap-3">
                <div className="font-semibold opacity-70">
                  {single.release_date?.slice(0, 4) ||
                    single.first_air_date?.slice(0, 4)}
                </div>
                <h1 className="max-md:text-2xl text-4xl font-medium tracking-wide leading-tight">
                  {single.title || single.name}
                </h1>
                <article className="flex gap-5 items-center">
                  <div className="font-semibold mt-1 max-sm:hidden text-secondary">
                    ★ {""}
                    {single.vote_average > 0
                      ? single.vote_average.toFixed(1)
                      : "N/A"}
                  </div>
                  <div className="px-3 py-0.5 border border-white bg-blue backdrop-blur-md rounded-full text-[12px] font-semibold uppercase tracking-wider text-white max-sm:hidden">
                    {genres[single.genre_ids[0] as keyof typeof genres]}
                  </div>
                </article>
              </div>

              <Link
                href={
                  single.media_type === "movie"
                    ? `/movie/${single.id}`
                    : single.media_type === "tv"
                      ? `/tv/${single.id}`
                      : "/404"
                }
                className="bg-blue backdrop-blur max-sm:px-4 max-sm:py-1 px-5 py-2 rounded-full border border-white/10 
                     transition-all duration-300 hover:scale-110 "
              >
                <Maximize2 className="max-sm:w-5 max-sm-h-5 w-8 h-8" />
              </Link>
            </section>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
