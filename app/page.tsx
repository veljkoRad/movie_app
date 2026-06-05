import { getTrendingAllDay } from "../lib/tmdb/trending";
import Hero from "@/components/Hero/page";
import TrendingWeek from "@/components/Lists/TrendingWeek";
import DiscoverShows from "@/components/Lists/DiscoverShows";
import UpcomingMovies from "@/components/Lists/UpcomingMovies";
import OnTheAir from "@/components/Lists/OnTheAir";
import NowPlaying from "@/components/Lists/NowPlaying";
import WrapperBg from "@/components/UI/WrapperBg";
import { Suspense } from "react";
import HeroSkeleton from "@/components/UI/HeroSkeleton";
import ListSkeleton from "@/components/UI/ListSkeleton";

// app/page.tsx
export default async function HomePage() {
  const dataTrendingAllDay = (await getTrendingAllDay()).results;
  const trendingAllDay = dataTrendingAllDay
    // filter it so it skips people and only shows movies and shows
    .filter((item) => item.media_type === "movie" || item.media_type === "tv")
    .slice(0, 4);
  const trendingAllDaySide = dataTrendingAllDay
    .filter((item) => item.media_type === "movie" || item.media_type === "tv")
    .slice(4, 7);

  return (
    <WrapperBg>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero list={trendingAllDay} sideList={trendingAllDaySide} />
      </Suspense>
      <Suspense fallback={<ListSkeleton />}>
        <TrendingWeek />
      </Suspense>
      <Suspense fallback={<ListSkeleton />}>
        <UpcomingMovies />
      </Suspense>
      <Suspense fallback={<ListSkeleton />}>
        <OnTheAir />
      </Suspense>
      <Suspense fallback={<ListSkeleton />}>
        <NowPlaying />
      </Suspense>
      <Suspense fallback={<ListSkeleton />}>
        <DiscoverShows />
      </Suspense>
    </WrapperBg>
  );
}
