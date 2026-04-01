import ListCarousel from "@/components/Lists/ListCarousel";
import { getRecommendedMovies } from "@/lib/tmdb/movies";

async function RecommendedMovies({ id }: { id: string }) {
  const data = await getRecommendedMovies(id);
  const recommendedMovies = data.results.slice(0, 7);
  return (
    <ListCarousel
      items={recommendedMovies}
      type="movie"
      title="Recommended Movies"
    />
  );
}

export default RecommendedMovies;
