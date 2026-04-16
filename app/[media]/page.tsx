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
        <Hero list={trendingTvDay} sideList={trendingTvDaySide} />
        <GenreTabs media="shows" />
        <PopularShows />
        <TopRatedShows />
        <TrendingShowsWeek />
        <DiscoverShows />
        <OnTheAir />
      </WrapperBg>
    );
  }
  if (media === "movies") {
    const dataTrendingMoviesDay = await getTrendingMoviesDay();
    const trendingMoviesDay = dataTrendingMoviesDay.results.slice(0, 4);
    const trendingMoviesDaySide = dataTrendingMoviesDay.results.slice(4, 7);

    return (
      <WrapperBg>
        <Hero list={trendingMoviesDay} sideList={trendingMoviesDaySide} />
        <GenreTabs media="movies" />
        <PopularMovies />
        <TopRatedMovies />
        <TrendingMoviesWeek />
        <UpcomingMovies />
        <DiscoverMovies />
        <NowPlaying />
      </WrapperBg>
    );
  }
  notFound();
}

export default MediaPage;
