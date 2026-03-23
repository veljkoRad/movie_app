import BannerSlide from "./BannerSlide";
import BannerSide from "./BannerSide";

export default function Hero({
  movies,
  sideMovies,
}: {
  movies: any[];
  sideMovies: any[];
}) {
  return (
    <div className="flex gap-6  justify-between max-lg:justify-center">
      <BannerSlide movies={movies} />
      <BannerSide sideMovies={sideMovies} />
    </div>
  );
}
