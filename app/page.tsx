import { getTrendingAllDay } from "../lib/tmdb/trending";
import Hero from "@/components/Hero/page";
import TrendingWeek from "@/components/Lists/TrendingWeek";
import DiscoverShows from "@/components/Lists/DiscoverShows";
import UpcomingMovies from "@/components/Lists/UpcomingMovies";
import OnTheAir from "@/components/Lists/OnTheAir";
import NowPlaying from "@/components/Lists/NowPlaying";
import WrapperBg from "@/components/UI/WrapperBg";

// app/page.tsx
export default async function HomePage() {
  const dataTrendingAllDay = (await getTrendingAllDay()).results;
  console.log(dataTrendingAllDay);
  const trendingAllDay = dataTrendingAllDay
    // filter it so it skips people and only shows movies and shows
    .filter((item) => item.media_type === "movie" || item.media_type === "tv")
    .slice(0, 4);
  const trendingAllDaySide = dataTrendingAllDay
    .filter((item) => item.media_type === "movie" || item.media_type === "tv")
    .slice(4, 7);

  return (
    <WrapperBg>
      <Hero list={trendingAllDay} sideList={trendingAllDaySide} />
      <TrendingWeek />
      <UpcomingMovies />
      <OnTheAir />
      <NowPlaying />
      <DiscoverShows />
    </WrapperBg>
  );
}
