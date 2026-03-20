import { getMovieDetails } from "@/lib/tmdb";

type MovieDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function MoveDetails({ params }: MovieDetailsProps) {
  const { id } = await params;

  const movie = await getMovieDetails(id);
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <p>{movie.overview}</p>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
      )}
    </main>
  );
}
