import Link from "next/link";
import Image from "next/image";
import type { TrendingListItem } from "@/lib/tmdb/typesList";
import { genres } from "@/lib/genres";

export default function BannerSide({
  sideList,
}: {
  sideList: TrendingListItem[];
}) {
  const genresArray = Object.values(genres);
  return (
    <section className=" flex flex-col justify-between relative min-w-89 max-xl:hidden ">
      <h2 className="text-xl font-medium tracking-widest">Trending Now</h2>
      {sideList.map((single) => (
        <div key={single.id} className="flex gap-3">
          <Link
            href={`${single.media_type === "movie" ? "/movies" : "/shows"}/single/${single.id}`}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w342${single.backdrop_path}`}
              alt={"name" in single ? single.name : single.title}
              width={256}
              height={144}
              className="object-cover rounded-lg min-w-[199px] w-[199px] h-28 hover:scale-105 transition-all duration-300"
            />
          </Link>
          <div className="flex flex-col gap-0.5 font-medium">
            <div className="text-md  ">
              {"name" in single ? single.name : single.title}
            </div>
            <div className="flex flex-col gap-1 text-xs text-secondary">
              {Array.isArray(single.genre_ids) &&
              single.genre_ids.length > 0 ? (
                <div>
                  {single.genre_ids
                    .slice(0, 2)
                    .map((id) => genres[id as keyof typeof genres])
                    .filter(Boolean)
                    .join(", ")}
                </div>
              ) : null}
              <div>
                ⭐
                {single.vote_average > 0
                  ? single.vote_average.toFixed(1)
                  : "N/A"}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
