import ListCarousel from "@/components/Lists/ListCarousel";
import Container from "../UI/Container";
import { getPopularMovies } from "@/lib/tmdb/tmdb";

async function PopularMovies() {
  const data = await getPopularMovies();
  const popularMovies = data.results.slice(0, 7);
  return (
    <Container>
      <h2>Popular</h2>
      <div className="mt-4">
        <ListCarousel items={popularMovies} type="movie" />
      </div>
    </Container>
  );
}

export default PopularMovies;
