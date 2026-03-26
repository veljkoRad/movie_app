import Container from "@/components/UI/Container";
import Hero from "@/components/Hero/Hero";
import { getTrendingMovies } from "@/lib/tmdb";

async function Movies() {
  const dataTrendingMovie = await getTrendingMovies();
  const trendingMovie = dataTrendingMovie.results.slice(0, 4);
  const trendingMovieSide = dataTrendingMovie.results.slice(4, 7);

  return (
    <Container>
      <Hero list={trendingMovie} sideList={trendingMovieSide} />
    </Container>
  );
}

export default Movies;
