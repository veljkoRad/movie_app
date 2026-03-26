import { getTrendingALLWeek } from "@/lib/tmdb";
import TrendingWeekCarousel from "@/components/Lists/TrendingWeekCarousel";
import Container from "../UI/Container";

/**
 * @description Fetches weekly trending items and renders a single responsive list component.
 * @returns {Promise<JSX.Element>} A server-rendered section containing one list that is draggable below xl.
 */
async function TrendingWeek() {
  const data = await getTrendingALLWeek();
  const weekList = data.results.slice(0, 7);
  console.log(weekList);
  return (
    <Container>
      <h2>This Week</h2>
      <div className="mt-6">
        <TrendingWeekCarousel weekList={weekList} />
      </div>
    </Container>
  );
}

export default TrendingWeek;
