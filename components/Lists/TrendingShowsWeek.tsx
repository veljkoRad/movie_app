import ListCarousel from "@/components/Lists/ListCarousel";
import Container from "../UI/Container";
import { getTrendingTvWeek } from "@/lib/tmdb/trending";

async function TrendingShowsWeek() {
  const data = await getTrendingTvWeek();
  const trendingShowsWeek = data.results.slice(0, 7);
  return (
    <Container>
      <h2>Trending This Week</h2>
      <div className="mt-4">
        <ListCarousel items={trendingShowsWeek} type="show" />
      </div>
    </Container>
  );
}

export default TrendingShowsWeek;
