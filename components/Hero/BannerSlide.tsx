import Link from "next/link";
import { Maximize2 } from "lucide-react";
import Carousel from "../Carousel";
import { genres } from "@/lib/genres";

export default function BannerSlide({ movies }: { movies: any }) {
  return (
    <section className=" max-w-216 min-w-0">
      <Carousel>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="w-full max-w-216  max-md:h-55 h-90 bg-cover bg-center rounded-[40px] p-6 flex items-end"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), transparent), url(https://image.tmdb.org/t/p/w780${movie.poster_path})`,
            }}
          >
            <section className="max-sm:flex-col flex max-sm:gap-2 justify-between max-sm:items-start items-center w-full">
              <div className="text-white flex flex-col gap-3">
                <div className="opacity-80">
                  {movie.release_date?.slice(0, 4) ||
                    movie.first_air_date?.slice(0, 4)}
                </div>
                <h1 className="max-md:text-2xl text-4xl font-medium tracking-wide leading-tight">
                  {movie.title || movie.name}
                </h1>
                <article className="flex gap-5 items-center">
                  <div className="font-semibold mt-1 max-sm:hidden">
                    ★&nbsp;
                    {movie.vote_average > 0
                      ? movie.vote_average.toFixed(1)
                      : "N/A"}
                  </div>
                  <div className="px-3 py-0.5 border border-white bg-blue backdrop-blur-md rounded-full text-[12px] font-semibold uppercase tracking-wider text-white">
                    {genres[movie.genre_ids[0]]}
                  </div>
                </article>
              </div>

              <Link
                href={`/movie/${movie.id}`}
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
