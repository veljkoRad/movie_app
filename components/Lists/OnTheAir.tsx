import ListCarousel from "@/components/Lists/ListCarousel";
import Container from "../UI/Container";
import { getOnTheAirShows } from "@/lib/tmdb/shows";

async function OnTheAir() {
  const data = await getOnTheAirShows();
  const onTheAirShows = data.results.slice(0, 7);
  return <ListCarousel items={onTheAirShows} type="show" title="On The Air" />;
}

export default OnTheAir;
