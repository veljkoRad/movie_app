import BannerSlide from "./BannerSlide";
import BannerSide from "./BannerSide";
import Container from "../Container";

export default function Hero({
  movies,
  sideMovies,
}: {
  movies: any[];
  sideMovies: any[];
}) {
  return (
    <Container>
      <div className="flex gap-6  justify-between max-lg:justify-center">
        <BannerSlide movies={movies} />
        <BannerSide sideMovies={sideMovies} />
      </div>
    </Container>
  );
}
