import ListCarousel from "@/components/Lists/ListCarousel";
import Container from "../UI/Container";
import { getNowPlayingMovies } from "@/lib/tmdb/movies";

async function NowPlaying() {
  const data = await getNowPlayingMovies();
  const nowPlayingMovies = data.results.slice(0, 7);
  return (
    <Container>
      <h2>Now Playing</h2>
      <div className="mt-4">
        <ListCarousel items={nowPlayingMovies} type="movie" />
      </div>
    </Container>
  );
}

export default NowPlaying;
