import ListCarousel from "@/components/Lists/ListCarousel";
import { getDiscoverMovies } from "@/lib/tmdb/movies";

async function DiscoverMovies() {
  const data = await getDiscoverMovies();
  const trendingMovies = data.results.slice(0, 7);
  return (
    <ListCarousel
      items={trendingMovies}
      type="movie"
      title="Discover"
      browse="discover"
    />
  );
}

export default DiscoverMovies;
