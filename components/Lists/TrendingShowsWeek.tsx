import ListCarousel from "@/components/Lists/ListCarousel";
import { getTrendingTvWeek } from "@/lib/tmdb/trending";

async function TrendingShowsWeek() {
  const data = await getTrendingTvWeek();
  const trendingShowsWeek = data.results.slice(0, 7);
  return (
    <ListCarousel
      items={trendingShowsWeek}
      type="show"
      title="Trending This Week"
      browse="trending"
    />
  );
}

export default TrendingShowsWeek;
