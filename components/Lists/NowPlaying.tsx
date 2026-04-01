import ListCarousel from "@/components/Lists/ListCarousel";
import { getNowPlayingMovies } from "@/lib/tmdb/movies";

async function NowPlaying() {
  const data = await getNowPlayingMovies();
  const nowPlayingMovies = data.results.slice(0, 7);
  return (
    <ListCarousel items={nowPlayingMovies} type="movie" title="Now Playing" />
  );
}

export default NowPlaying;
