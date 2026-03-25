import Container from "@/components/Container";
import { getPopularMovies, getTrendingALL } from "../lib/tmdb";
import Hero from "@/components/Hero/Hero";

// app/page.tsx
export default async function HomePage() {
  const dataTrendingAll = await getTrendingALL();

  const trendingAll = dataTrendingAll.results.slice(0, 4);
  const trendingAllSide = dataTrendingAll.results.slice(4, 7);

  return (
    <main>
      <Hero movies={trendingAll} sideMovies={trendingAllSide} />
    </main>
  );
}
