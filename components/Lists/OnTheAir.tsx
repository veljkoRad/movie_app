import ListCarousel from "@/components/Lists/ListCarousel";
import Container from "../UI/Container";
import { getOnTheAirShows } from "@/lib/tmdb/shows";

async function OnTheAir() {
  const data = await getOnTheAirShows();
  const onTheAirShows = data.results.slice(0, 7);
  return (
    <Container>
      <h2>On The Air</h2>
      <div className="mt-4">
        <ListCarousel items={onTheAirShows} type="show" />
      </div>
    </Container>
  );
}

export default OnTheAir;
