import { getPopularMovies, getTrendingALL } from "../lib/tmdb";
import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";

// app/page.tsx
export default async function HomePage() {
  const dataTrendingAll = await getTrendingALL();

  const trendingAll = dataTrendingAll.results.slice(0, 4);
  const trendingAllSide = dataTrendingAll.results.slice(4, 7);

  return (
    <div>
      <main className="px-4 py-8">
        <div className="max-w-7xl m-auto m-auto ">
          <Hero movies={trendingAll} sideMovies={trendingAllSide} />
        </div>
      </main>
    </div>
  );
}
