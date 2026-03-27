import Container from "@/components/UI/Container";
import Hero from "@/components/Hero/Hero";
import { getTrendingMovies } from "@/lib/tmdb";
import PopularMovies from "@/components/Lists/PopularMovies";
import TopRatedMovies from "@/components/Lists/TopRatedMovies";
import UpcomingMovies from "@/components/Lists/UpcomingMovies";
import DiscoverMovies from "@/components/Lists/DiscoverMovies";
import TrendingMoviesWeek from "@/components/Lists/TrendingMoviesWeek";
import NowPlaying from "@/components/Lists/NowPlaying";

async function Movies() {
  const dataTrendingMovie = await getTrendingMovies();
  const trendingMovie = dataTrendingMovie.results.slice(0, 4);
  const trendingMovieSide = dataTrendingMovie.results.slice(4, 7);

  return (
    <Container>
      <Hero list={trendingMovie} sideList={trendingMovieSide} />
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
