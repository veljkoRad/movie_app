import Hero from "@/components/Hero/Hero";
import { getTrendingTvDay } from "@/lib/tmdb/trending";
import PopularShows from "@/components/Lists/PopularShows";
import TrendingShowsWeek from "@/components/Lists/TrendingShowsWeek";
import DiscoverShows from "@/components/Lists/DiscoverShows";
import OnTheAir from "@/components/Lists/OnTheAir";
import TopRatedShows from "@/components/Lists/TopRatedShows";
import WrapperBg from "@/components/UI/WrapperBg";
async function Shows() {
  const dataTrendingTvDay = await getTrendingTvDay();
  const trendingTvDay = dataTrendingTvDay.results.slice(0, 4);
  const trendingTvDaySide = dataTrendingTvDay.results.slice(4, 7);
  const dataImage = trendingTvDay[0].backdrop_path;
  return (
    <WrapperBg image={dataImage}>
      <Hero list={trendingTvDay} sideList={trendingTvDaySide} />
      <PopularShows />
      <TopRatedShows />
      <TrendingShowsWeek />
      <DiscoverShows />
      <OnTheAir />
    </WrapperBg>
  );
}

export default Shows;
