import { getTrendingAllWeek } from "@/lib/tmdb/trending";
import ListCarousel from "@/components/Lists/ListCarousel";

async function TrendingWeek() {
  const data = await getTrendingAllWeek();
  const items = data.results
    .filter((item) => item.media_type === "movie" || item.media_type === "tv")
    .slice(0, 7);
  return <ListCarousel items={items} title="This Week" />;
}

export default TrendingWeek;
