import { getTrendingALL } from "../lib/tmdb";
import Hero from "@/components/Hero/Hero";
import TrendingWeek from "@/components/Lists/TrendingWeek";
import DiscoverMovies from "@/components/Lists/DiscoverMovies";
import DiscoverShows from "@/components/Lists/DiscoverShows";
import UpcomingMovies from "@/components/Lists/UpcomingMovies";
import OnTheAir from "@/components/Lists/OnTheAir";
import NowPlaying from "@/components/Lists/NowPlaying";

// app/page.tsx
export default async function HomePage() {
  const dataTrendingAll = await getTrendingALL();
  const dataRemovePerson = dataTrendingAll.results.filter(
    (item) => item.media_type !== "person",
  );
  const trendingAll = dataRemovePerson.slice(0, 4);
  const trendingAllSide = dataRemovePerson.slice(4, 7);
  console.log(trendingAll);

  return (
    <main>
      <Hero list={trendingAll} sideList={trendingAllSide} />
      <TrendingWeek />
      <UpcomingMovies />
      <OnTheAir />
      <NowPlaying />
      <DiscoverShows />
    </main>
  );
}
