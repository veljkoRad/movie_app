import ListCarousel from "@/components/Lists/ListCarousel";
import Container from "../UI/Container";
import { getPopularShows } from "@/lib/tmdb";

async function PopularShows() {
  const data = await getPopularShows();
  const popularShows = data.results.slice(0, 7);
  return (
    <Container>
      <h2>Popular</h2>
      <div className="mt-4">
        <ListCarousel weekList={popularShows} />
      </div>
    </Container>
  );
}

export default PopularShows;
