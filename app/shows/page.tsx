import Container from "@/components/UI/Container";
import Hero from "@/components/Hero/Hero";
import { getTrendingTv } from "@/lib/tmdb";
async function Shows() {
  const dataTrendingTv = await getTrendingTv();
  console.log(dataTrendingTv.results);
  const trendingTv = dataTrendingTv.results.slice(0, 4);
  const trendingTvSide = dataTrendingTv.results.slice(4, 7);
  return (
    <Container>
      <Hero list={trendingTv} sideList={trendingTvSide} />
    </Container>
  );
}

export default Shows;
