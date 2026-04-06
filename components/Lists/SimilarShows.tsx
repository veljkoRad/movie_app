import ListCarousel from "@/components/Lists/ListCarousel";
import { getSimilarShows } from "@/lib/tmdb/shows";

async function SimilarShows({ id }: { id: string }) {
  const data = await getSimilarShows(id);
  const similarShows = data.results.slice(0, 7);
  return (
    <ListCarousel
      items={similarShows}
      type="show"
      title="Similar Shows"
      browse="similar"
    />
  );
}

export default SimilarShows;
