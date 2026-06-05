// Shared
import Hero from "@/components/Hero/page";
import WrapperBg from "@/components/UI/WrapperBg";

// Shows
import { getTrendingTvDay } from "@/lib/tmdb/trending";
import PopularShows from "@/components/Lists/PopularShows";
import TrendingShowsWeek from "@/components/Lists/TrendingShowsWeek";
import DiscoverShows from "@/components/Lists/DiscoverShows";
import OnTheAir from "@/components/Lists/OnTheAir";
import TopRatedShows from "@/components/Lists/TopRatedShows";

// Movies
import { getTrendingMoviesDay } from "@/lib/tmdb/trending";
import PopularMovies from "@/components/Lists/PopularMovies";
import TopRatedMovies from "@/components/Lists/TopRatedMovies";
import UpcomingMovies from "@/components/Lists/UpcomingMovies";
import DiscoverMovies from "@/components/Lists/DiscoverMovies";
import TrendingMoviesWeek from "@/components/Lists/TrendingMoviesWeek";
import NowPlaying from "@/components/Lists/NowPlaying";
import GenreTabs from "@/components/Genres/GenreTabs";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import HeroSkeleton from "@/components/UI/HeroSkeleton";
import ListSkeleton from "@/components/UI/ListSkeleton";

type MediaPageProps = {
  params: Promise<{ media: string }>;
};

async function MediaPage({ params }: MediaPageProps) {
  const { media } = await params;
  if (media === "shows") {
    const dataTrendingTvDay = await getTrendingTvDay();
    const trendingTvDay = dataTrendingTvDay.results.slice(0, 4);
    const trendingTvDaySide = dataTrendingTvDay.results.slice(4, 7);
    return (
      <WrapperBg>
        <Suspense fallback={<HeroSkeleton />}>
          <Hero list={trendingTvDay} sideList={trendingTvDaySide} />
        </Suspense>
        <GenreTabs media="shows" />
        <Suspense fallback={<ListSkeleton />}>
          <PopularShows />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <TopRatedShows />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <TrendingShowsWeek />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <DiscoverShows />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <OnTheAir />
        </Suspense>
      </WrapperBg>
    );
  }
  if (media === "movies") {
    const dataTrendingMoviesDay = await getTrendingMoviesDay();
    const trendingMoviesDay = dataTrendingMoviesDay.results.slice(0, 4);
    const trendingMoviesDaySide = dataTrendingMoviesDay.results.slice(4, 7);

    return (
      <WrapperBg>
        <Suspense fallback={<HeroSkeleton />}>
          <Hero list={trendingMoviesDay} sideList={trendingMoviesDaySide} />
        </Suspense>
        <GenreTabs media="movies" />
        <Suspense fallback={<ListSkeleton />}>
          <PopularMovies />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <TopRatedMovies />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <TrendingMoviesWeek />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <UpcomingMovies />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <DiscoverMovies />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <NowPlaying />
        </Suspense>
      </WrapperBg>
    );
  }
  notFound();
}

export default MediaPage;
