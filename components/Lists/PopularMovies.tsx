import ListCarousel from "@/components/Lists/ListCarousel";
import { getPopularMovies } from "@/lib/tmdb/movies";

async function PopularMovies() {
  const data = await getPopularMovies();
  const popularMovies = data.results.slice(0, 7);
  return (
    <ListCarousel
      items={popularMovies}
      type="movie"
      title="Popular"
      browse="popular"
    />
  );
}

export default PopularMovies;
