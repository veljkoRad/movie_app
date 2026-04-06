import ListCarousel from "@/components/Lists/ListCarousel";
import { getTopRatedShows } from "@/lib/tmdb/shows";

async function TopRatedShows() {
  const data = await getTopRatedShows();
  const topRatedShows = data.results.slice(0, 7);
  return (
    <ListCarousel
      items={topRatedShows}
      type="show"
      title="Top Rated"
      browse="top-rated"
    />
  );
}

export default TopRatedShows;
