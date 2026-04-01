import ListCarousel from "@/components/Lists/ListCarousel";
import { getSimilarMovies } from "@/lib/tmdb/movies";

async function SimilarMovies({ id }: { id: string }) {
  const data = await getSimilarMovies(id);
  const similarMovies = data.results.slice(0, 7);
  return (
    <ListCarousel items={similarMovies} type="movie" title="Similar Movies" />
  );
}

export default SimilarMovies;
