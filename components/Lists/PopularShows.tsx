import ListCarousel from "@/components/Lists/ListCarousel";
import { getPopularShows } from "@/lib/tmdb/shows";

async function PopularShows() {
  const data = await getPopularShows();
  const popularShows = data.results.slice(0, 7);
  return <ListCarousel items={popularShows} type="show" title="Popular" />;
}

export default PopularShows;
