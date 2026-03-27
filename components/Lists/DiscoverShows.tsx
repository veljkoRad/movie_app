import ListCarousel from "@/components/Lists/ListCarousel";
import Container from "../UI/Container";
import { getDiscoverShows } from "@/lib/tmdb";

async function DiscoverShows() {
  const data = await getDiscoverShows();
  const trendingShows = data.results.slice(0, 7);
  return (
    <Container>
      <h2>Discover</h2>
      <div className="mt-4">
        <ListCarousel weekList={trendingShows} />
      </div>
    </Container>
  );
}

export default DiscoverShows;
