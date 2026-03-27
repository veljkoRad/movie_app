import ListCarousel from "@/components/Lists/ListCarousel";
import Container from "../UI/Container";
import { getNowPlayingMovies } from "@/lib/tmdb";

async function NowPlaying() {
  const data = await getNowPlayingMovies();
  const nowPlayingMovies = data.results.slice(0, 7);
  return (
    <Container>
      <h2>Now Playing</h2>
      <div className="mt-4">
        <ListCarousel weekList={nowPlayingMovies} type="movie" />
      </div>
    </Container>
  );
}

export default NowPlaying;
