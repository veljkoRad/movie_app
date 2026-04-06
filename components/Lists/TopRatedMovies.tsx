import ListCarousel from "@/components/Lists/ListCarousel";
import { getTopRatedMovies } from "@/lib/tmdb/movies";

async function TopRatedMovies() {
  const data = await getTopRatedMovies();
  const topRatedMovies = data.results.slice(0, 7);
  return (
    <ListCarousel
      items={topRatedMovies}
      type="movie"
      title="Top Rated"
      browse="top-rated"
    />
  );
}

export default TopRatedMovies;
