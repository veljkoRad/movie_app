import ListCarousel from "@/components/Lists/ListCarousel";
import Container from "../UI/Container";
import { getDiscoverMovies } from "@/lib/tmdb";

async function DiscoverMovies() {
  const data = await getDiscoverMovies();
  const trendingMovies = data.results.slice(0, 7);
  return (
    <Container>
      <h2>Discover</h2>
      <div className="mt-4">
        <ListCarousel weekList={trendingMovies} type="movie" />
      </div>
    </Container>
  );
}

export default DiscoverMovies;
