import ListCarousel from "@/components/Lists/ListCarousel";
import Container from "../UI/Container";
import { getUpcomingMovies } from "@/lib/tmdb/movies";

async function UpcomingMovies() {
  const data = await getUpcomingMovies();
  const upcomingMovies = data.results.slice(0, 7);
  return (
    <Container>
      <h2>Upcoming</h2>
      <div className="mt-4">
        <ListCarousel items={upcomingMovies} type="movie" />
      </div>
    </Container>
  );
}

export default UpcomingMovies;
