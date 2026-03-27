import ListCarousel from "@/components/Lists/ListCarousel";
import Container from "../UI/Container";
import { getTopRatedMovies } from "@/lib/tmdb/movies";

async function TopRatedMovies() {
  const data = await getTopRatedMovies();
  const topRatedMovies = data.results.slice(0, 7);
  return (
    <Container>
      <h2>Top Rated</h2>
      <div className="mt-4">
        <ListCarousel items={topRatedMovies} type="movie" />
      </div>
    </Container>
  );
}

export default TopRatedMovies;
