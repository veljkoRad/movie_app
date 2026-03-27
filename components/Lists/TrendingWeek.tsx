import { getTrendingAllWeek } from "@/lib/tmdb/trending";
import ListCarousel from "@/components/Lists/ListCarousel";
import Container from "../UI/Container";

async function TrendingWeek() {
  const data = await getTrendingAllWeek();
  const items = data.results
    .filter((item) => item.media_type === "movie" || item.media_type === "tv")
    .slice(0, 7);
  return (
    <Container>
      <h2>This Week</h2>
      <div className="mt-4">
        <ListCarousel items={items} />
      </div>
    </Container>
  );
}

export default TrendingWeek;
