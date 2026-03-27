import ListCarousel from "@/components/Lists/ListCarousel";
import Container from "../UI/Container";
import { getTopRatedShows } from "@/lib/tmdb";

async function TopRatedShows() {
  const data = await getTopRatedShows();
  const topRatedShows = data.results.slice(0, 7);
  return (
    <Container>
      <h2>Top Rated</h2>
      <div className="mt-4">
        <ListCarousel weekList={topRatedShows} type="show" />
      </div>
    </Container>
  );
}

export default TopRatedShows;
