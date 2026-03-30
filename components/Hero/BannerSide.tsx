import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/lib/tmdb/tmdb";
export default function BannerSide({ sideList }: { sideList: Movie[] }) {
  return (
    <section className=" flex flex-col gap-4 relative min-w-89 max-lg:hidden ">
      <h2>Today</h2>
      {sideList.map((single) => (
        <div key={single.id} className="flex gap-4">
          <Link
            href={
              single.media_type === "movie"
                ? `/movie/${single.id}`
                : single.media_type === "tv"
                  ? `/tv/${single.id}`
                  : "/404"
            }
          >
            <Image
              src={
                single.backdrop_path
                  ? `https://image.tmdb.org/t/p/w342${single.backdrop_path}`
                  : single.poster_path
                    ? `https://image.tmdb.org/t/p/w342${single.poster_path}`
                    : "/placeholder.jpg"
              }
              alt={single.title || single.name || ""}
              width={single.backdrop_path ? 256 : 185}
              height={single.backdrop_path ? 144 : 278}
              className="object-cover rounded-lg hover:opacity-20 transition-all duration-300 min-w-50.5 w-50.5 h-32.5"
            />
          </Link>
          <div className="flex flex-col gap-0.5">
            <div className="text-xs">{single.title || single.name}</div>
            <div className="text-xs text-secondary">
              {single.release_date?.slice(0, 4) ||
                single.first_air_date?.slice(0, 4)}
            </div>
            <div className="text-xs text-secondary">
              ★
              {single.vote_average > 0 ? single.vote_average.toFixed(1) : "N/A"}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
