import Container from "../UI/Container";
import Image from "next/image";
import { Single, People } from "@/lib/tmdb/typesList";
import Cast from "./Cast";
import SimilarMovies from "@/components/Lists/SimilarMovies";
import SimilarShows from "@/components/Lists/SimilarShows";
import RecommendedMovies from "../Lists/RecommendedMovies";
import RecommendedShows from "../Lists/RecommendedShows";
import Link from "next/link";
export default function SinglePage({
  single,
  cast,
  type,
}: {
  single: Single;
  cast: People[];
  type: "movie" | "show";
}) {
  function formatRuntime(runtime: number): string {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}min`;
  }
  return (
    <div>
      <div className=" absolute top-14 w-full">
        <div className="relative top-0 overflow-hidden  bg-blue">
          <Image
            placeholder={single.backdrop_path ? "blur" : "empty"}
            blurDataURL={
              single.backdrop_path
                ? `https://image.tmdb.org/t/p/w92${single.backdrop_path}`
                : undefined
            }
            src={`https://image.tmdb.org/t/p/w1280${single.backdrop_path}`}
            alt={single.name || single.title || ""}
            loading="eager"
            priority
            width={1280}
            height={720}
            className="w-full max-h-[462px] max-lg:aspect-[16/9] max-md:aspect-auto max-md:h-[300px] object-cover object-top opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
      </div>
      <Container>
        <div className=" relative mt-70 max-md:mt-4  flex gap-8 max max-md:flex-col ">
          <Image
            placeholder={single.poster_path ? "blur" : "empty"}
            blurDataURL={
              single.poster_path
                ? `https://image.tmdb.org/t/p/w92${single.poster_path}`
                : undefined
            }
            src={`https://image.tmdb.org/t/p/w185${single.poster_path}`}
            alt={single.name || single.title || ""}
            width={185}
            height={278}
            className="  max-md:w-[100px] max-lg:w-[150px] w-200px rounded-lg border-2 border-primary "
          />
          <div className="flex flex-col justify-evenly  ">
            <h1 className="text-4xl max-lg:text-2xl font-bold">
              {single.name || single.title} (
              {single.release_date?.slice(0, 4) ||
                single.first_air_date?.slice(0, 4)}
              )
            </h1>
            <div className="flex flex-col gap-1 text-md  max-lg:text-sm  text-primary">
              <div className="flex gap-2">
                {single.genres.map((genre) => (
                  <Link
                    href={`/${type === "movie" ? "movies" : "shows"}/genre/${genre.id}`}
                    key={genre.id}
                    className="text-blue "
                  >
                    {genre.name},
                  </Link>
                ))}
              </div>
              <div>⭐ {single.vote_average.toFixed(1) || "N/A"}</div>
              {type === "movie" && (
                <div>{formatRuntime(single.runtime ?? 0)}</div>
              )}
              {type === "show" && (
                <div> Seasons: {single.number_of_seasons} </div>
              )}
              <div className="flex gap-2">
                <div className="capitalize">Language:</div>
                <div className="uppercase">{single.original_language}</div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-20 text-xl font-bold text-primary">{single.tagline}</p>
        <p className="text-secondary font-medium mt-4 max-w-[80ch]">
          {single.overview}
        </p>
        <Cast people={cast} />
        {type === "movie" ? (
          <RecommendedMovies id={single.id.toString()} />
        ) : (
          <RecommendedShows id={single.id.toString()} />
        )}
        {type === "movie" ? (
          <SimilarMovies id={single.id.toString()} />
        ) : (
          <SimilarShows id={single.id.toString()} />
        )}
      </Container>
    </div>
  );
}
