import SinglePage from "@/components/SinglePage/SinglePage";
import { getMovieDetails, getPeopleMovie } from "@/lib/tmdb/movies";

type MovieDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function MoveDetails({ params }: MovieDetailsProps) {
  const { id } = await params;
  const movie = await getMovieDetails(id);
  const peopleMovie = (await getPeopleMovie(id)).cast;

  return <SinglePage single={movie} cast={peopleMovie} type="movie" />;
}
