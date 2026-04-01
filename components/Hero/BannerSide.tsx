import Link from "next/link";
import Image from "next/image";
import type { TrendingListItem } from "@/lib/tmdb/typesList";

export default function BannerSide({
  sideList,
}: {
  sideList: TrendingListItem[];
}) {
  return (
    <section className=" flex flex-col gap-4 relative min-w-89 max-lg:hidden ">
      <h2>Today</h2>
      {sideList.map((single) => (
        <div key={single.id} className="flex gap-4">
          <Link
            href={`${single.media_type === "movie" ? "/movie" : "/tv"}/${single.id}`}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w342${single.backdrop_path}`}
              alt={"name" in single ? single.name : single.title}
              width={256}
              height={144}
              className="object-cover rounded-lg hover:opacity-20 transition-all duration-300 min-w-50.5 w-50.5 h-32.5"
            />
          </Link>
          <div className="flex flex-col gap-0.5">
            <div className="text-sm font-semibold">
              {"name" in single ? single.name : single.title}
            </div>
            <div className="text-xs text-secondary">
              {"release_date" in single
                ? single.release_date?.slice(0, 4)
                : "first_air_date" in single
                  ? single.first_air_date?.slice(0, 4)
                  : "N/A"}
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
