import Container from "@/components/UI/Container";
import { getMovieDetails } from "@/lib/tmdb";
import Image from "next/image";

type MovieDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function MoveDetails({ params }: MovieDetailsProps) {
  const { id } = await params;

  const movie = await getMovieDetails(id);
  return (
    <Container>
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <p>{movie.overview}</p>
      {movie.poster_path && (
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title || movie.name || ""}
          width={160}
          height={72}
        />
      )}
    </Container>
  );
}
