import Container from "@/components/UI/Container";
import Hero from "@/components/Hero/Hero";
import { getTrendingMoviesDay } from "@/lib/tmdb/trending";
import PopularMovies from "@/components/Lists/PopularMovies";
import TopRatedMovies from "@/components/Lists/TopRatedMovies";
import UpcomingMovies from "@/components/Lists/UpcomingMovies";
import DiscoverMovies from "@/components/Lists/DiscoverMovies";
import TrendingMoviesWeek from "@/components/Lists/TrendingMoviesWeek";
import NowPlaying from "@/components/Lists/NowPlaying";

async function Movies() {
  const dataTrendingMoviesDay = await getTrendingMoviesDay();
  const trendingMoviesDay = dataTrendingMoviesDay.results.slice(0, 4);
  const trendingMoviesDaySide = dataTrendingMoviesDay.results.slice(4, 7);

  return (
    <Container>
      <Hero list={trendingMoviesDay} sideList={trendingMoviesDaySide} />
      <PopularMovies />
      <TopRatedMovies />
      <TrendingMoviesWeek />
      <UpcomingMovies />
      <DiscoverMovies />
      <NowPlaying />
    </Container>
  );
}

export default Movies;
