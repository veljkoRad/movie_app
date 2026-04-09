import { notFound } from "next/navigation";
import SinglePage from "@/components/SinglePage/SinglePage";
import { getMovieDetails, getPeopleMovie } from "@/lib/tmdb/movies";
import { getTvDetails, getPeopleShow } from "@/lib/tmdb/shows";

type PageProps = {
  params: Promise<{
    media: string;
    single: string;
  }>;
};

export default async function MediaSinglePage({ params }: PageProps) {
  const { media, single } = await params;

  if (media !== "movies" && media !== "shows") {
    notFound();
  }

  if (media === "movies") {
    const movie = await getMovieDetails(single);
    const cast = (await getPeopleMovie(single)).cast;

    return <SinglePage single={movie} cast={cast} type="movie" />;
  }

  const tv = await getTvDetails(single);
  const cast = (await getPeopleShow(single)).cast;

  return <SinglePage single={tv} cast={cast} type="show" />;
}
