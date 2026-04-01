import ListCarousel from "@/components/Lists/ListCarousel";
import { getUpcomingMovies } from "@/lib/tmdb/movies";

async function UpcomingMovies() {
  const data = await getUpcomingMovies();
  const upcomingMovies = data.results.slice(0, 7);
  return <ListCarousel items={upcomingMovies} type="movie" title="Upcoming" />;
}

export default UpcomingMovies;
