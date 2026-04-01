import Link from "next/link";
import Image from "next/image";
import type { TrendingListItem } from "@/lib/tmdb/typesList";
import {
  getMediaHref,
  getMediaTitle,
  getMediaYear,
  getPreferredImageUrl,
} from "@/lib/tmdb/media";

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
          <Link href={getMediaHref(single)}>
            <Image
              src={getPreferredImageUrl(single, "w342")}
              alt={getMediaTitle(single)}
              width={single.backdrop_path ? 256 : 185}
              height={single.backdrop_path ? 144 : 278}
              className="object-cover rounded-lg hover:opacity-20 transition-all duration-300 min-w-50.5 w-50.5 h-32.5"
            />
          </Link>
          <div className="flex flex-col gap-0.5">
            <div className="text-sm font-semibold">{getMediaTitle(single)}</div>
            <div className="text-xs text-secondary">{getMediaYear(single)}</div>
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
