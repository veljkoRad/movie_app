import SinglePage from "@/components/SinglePage/SinglePage";
import { getMovieDetails } from "@/lib/tmdb/tmdb";

type MovieDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function MoveDetails({ params }: MovieDetailsProps) {
  const { id } = await params;

  const movie = await getMovieDetails(id);
  return <SinglePage single={movie} />;
}
