import { getTrendingALLWeek } from "@/lib/tmdb";
import TrendingWeekCarousel from "@/components/Lists/TrendingWeekCarousel";
import Container from "../UI/Container";
import Image from "next/image";

/**
 * @description Fetches weekly trending items and renders responsive list layouts.
 * @returns {Promise<JSX.Element>} A server-rendered section with mobile carousel and desktop static list.
 */
async function TrendingWeek() {
  const data = await getTrendingALLWeek();
  const weekList = data.results.slice(0, 7);
  console.log(weekList);
  return (
    <Container>
      <h2>This Week</h2>
      <div className="mt-6 xl:hidden">
        <TrendingWeekCarousel weekList={weekList} />
      </div>

      <div className="hidden xl:flex gap-4 mt-6 ">
        {weekList.map((single) => (
          <section key={single.id} className="flex flex-col gap-1">
            <Image
              src={`https://image.tmdb.org/t/p/w500${single.poster_path}`}
              alt={single.title || single.name || "Trending title"}
              width={164}
              height={72}
              className="rounded-2xl max-sm:w-25 max-w-41"
            />
            <div className="flex flex-col gap-0.5 max-sm:hidden">
              <p className="text-xs text-secondary">
                ★{" "}
                {single.vote_average > 0
                  ? single.vote_average.toFixed(1)
                  : "N/A"}
              </p>
              <p className="text-sm font-medium">
                {single.title || single.name}
              </p>
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}

export default TrendingWeek;
