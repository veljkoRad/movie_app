import ListCarousel from "@/components/Lists/ListCarousel";
import { getTrendingMoviesWeek } from "@/lib/tmdb/trending";

async function TrendingMoviesWeek() {
  const data = await getTrendingMoviesWeek();
  const trendingMoviesWeek = data.results.slice(0, 7);
  return (
    <ListCarousel
      items={trendingMoviesWeek}
      type="movie"
      title="Trending This Week"
    />
  );
}

export default TrendingMoviesWeek;
