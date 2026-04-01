import ListCarousel from "@/components/Lists/ListCarousel";
import { getRecommendedShows } from "@/lib/tmdb/shows";

async function RecommendedShows({ id }: { id: string }) {
  const data = await getRecommendedShows(id);
  const recommendedShows = data.results.slice(0, 7);
  return (
    <ListCarousel
      items={recommendedShows}
      type="show"
      title="Recommended Shows"
    />
  );
}

export default RecommendedShows;
