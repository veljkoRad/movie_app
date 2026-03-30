import { getTrendingAllDay } from "../lib/tmdb/trending";
import Hero from "@/components/Hero/Hero";
import TrendingWeek from "@/components/Lists/TrendingWeek";
import DiscoverMovies from "@/components/Lists/DiscoverMovies";
import DiscoverShows from "@/components/Lists/DiscoverShows";
import UpcomingMovies from "@/components/Lists/UpcomingMovies";
import OnTheAir from "@/components/Lists/OnTheAir";
import NowPlaying from "@/components/Lists/NowPlaying";
import WrapperBg from "@/components/UI/WrapperBg";

// app/page.tsx
export default async function HomePage() {
  const dataTrendingAllDay = await getTrendingAllDay();
  const trendingAllDay = dataTrendingAllDay.results
    .filter((item) => item.media_type === "movie" || item.media_type === "tv")
    .slice(0, 4);
  const trendingAllDaySide = dataTrendingAllDay.results
    .filter((item) => item.media_type === "movie" || item.media_type === "tv")
    .slice(4, 7);
  const dataImage = trendingAllDay[0].backdrop_path;

  return (
    <WrapperBg image={dataImage}>
      <Hero list={trendingAllDay} sideList={trendingAllDaySide} />
      <TrendingWeek />
      <UpcomingMovies />
      <OnTheAir />
      <NowPlaying />
      <DiscoverShows />
    </WrapperBg>
  );
}
