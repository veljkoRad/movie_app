import { getTrendingAllDay } from "../lib/tmdb/trending";
import Hero from "@/components/Hero/Hero";
import TrendingWeek from "@/components/Lists/TrendingWeek";
import DiscoverMovies from "@/components/Lists/DiscoverMovies";
import DiscoverShows from "@/components/Lists/DiscoverShows";
import UpcomingMovies from "@/components/Lists/UpcomingMovies";
import OnTheAir from "@/components/Lists/OnTheAir";
import NowPlaying from "@/components/Lists/NowPlaying";

// app/page.tsx
export default async function HomePage() {
  const dataTrendingAllDay = await getTrendingAllDay();
  const trendingAllDay = dataTrendingAllDay.results.slice(0, 4);
  const trendingAllDaySide = dataTrendingAllDay.results.slice(4, 7);

  return (
    <main>
      <Hero list={trendingAllDay} sideList={trendingAllDaySide} />
      <TrendingWeek />
      <UpcomingMovies />
      <OnTheAir />
      <NowPlaying />
      <DiscoverShows />
    </main>
  );
}
