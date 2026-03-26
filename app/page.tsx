import { getTrendingALL } from "../lib/tmdb";
import Hero from "@/components/Hero/Hero";
import TrendingWeek from "@/components/Lists/TrendingWeek";

// app/page.tsx
export default async function HomePage() {
  const dataTrendingAll = await getTrendingALL();

  const trendingAll = dataTrendingAll.results.slice(0, 4);
  const trendingAllSide = dataTrendingAll.results.slice(4, 7);

  return (
    <main>
      <Hero list={trendingAll} sideList={trendingAllSide} />
      <TrendingWeek />
    </main>
  );
}
