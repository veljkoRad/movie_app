import { getTrendingALLWeek } from "@/lib/tmdb";
import ListCarousel from "@/components/Lists/ListCarousel";
import Container from "../UI/Container";

async function TrendingWeek() {
  const data = await getTrendingALLWeek();
  const weekList = data.results
    .filter((item) => item.media_type !== "person")
    .slice(0, 7);
  return (
    <Container>
      <h2>This Week</h2>
      <div className="mt-4">
        <ListCarousel weekList={weekList} />
      </div>
    </Container>
  );
}

export default TrendingWeek;
