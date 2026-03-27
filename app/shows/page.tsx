import Container from "@/components/UI/Container";
import Hero from "@/components/Hero/Hero";
import { getTrendingTv } from "@/lib/tmdb";
import PopularShows from "@/components/Lists/PopularShows";
import TrendingShowsWeek from "@/components/Lists/TrendingShowsWeek";
import DiscoverShows from "@/components/Lists/DiscoverShows";
import OnTheAir from "@/components/Lists/OnTheAir";
import TopRatedShows from "@/components/Lists/TopRatedShows";
async function Shows() {
  const dataTrendingTv = await getTrendingTv();
  const trendingTv = dataTrendingTv.results.slice(0, 4);
  const trendingTvSide = dataTrendingTv.results.slice(4, 7);
  return (
    <Container>
      <Hero list={trendingTv} sideList={trendingTvSide} />
      <PopularShows />
      <TopRatedShows />
      <TrendingShowsWeek />
      <DiscoverShows />
      <OnTheAir />
    </Container>
  );
}

export default Shows;
