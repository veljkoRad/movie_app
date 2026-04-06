import ListCarousel from "@/components/Lists/ListCarousel";
import { getDiscoverShows } from "@/lib/tmdb/shows";

async function DiscoverShows() {
  const data = await getDiscoverShows();
  const trendingShows = data.results.slice(0, 7);
  return (
    <ListCarousel
      items={trendingShows}
      type="show"
      title="Discover"
      browse="discover"
    />
  );
}

export default DiscoverShows;
