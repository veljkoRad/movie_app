import ListCarousel from "@/components/Lists/ListCarousel";
import Container from "../UI/Container";
import { getTrendingMoviesWeek } from "@/lib/tmdb/trending";

async function TrendingMoviesWeek() {
  const data = await getTrendingMoviesWeek();
  const trendingMoviesWeek = data.results.slice(0, 7);
  return (
    <Container>
      <h2>Trending This Week</h2>
      <div className="mt-4">
        <ListCarousel items={trendingMoviesWeek} type="movie" />
      </div>
    </Container>
  );
}

export default TrendingMoviesWeek;
