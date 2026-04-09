import BannerSlide from "./BannerSlide";
import BannerSide from "./BannerSide";
import Container from "../UI/Container";
import type { TrendingListItem } from "@/lib/tmdb/typesList";

export default function Hero({
  list,
  sideList,
}: {
  list: TrendingListItem[];
  sideList: TrendingListItem[];
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
