import BannerSlide from "./BannerSlide";
import BannerSide from "./BannerSide";
import Container from "../UI/Container";
import { Movie } from "@/lib/tmdb/tmdb";

export default function Hero({
  list,
  sideList,
}: {
  list: Movie[];
  sideList: Movie[];
}) {
  return (
    <Container>
      <div className="flex gap-6  justify-between max-lg:justify-center">
        <BannerSlide list={list} />
        <BannerSide sideList={sideList} />
      </div>
    </Container>
  );
}
