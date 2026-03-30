import Container from "@/components/UI/Container";
import { getMovieDetails } from "@/lib/tmdb/tmdb";
import Image from "next/image";

type MovieDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function MoveDetails({ params }: MovieDetailsProps) {
  const { id } = await params;

  const movie = await getMovieDetails(id);
  console.log(movie);
  return (
    <Container>
      <div className="relative overflow-hidden rounded-[40px] bg-blue">
        <Image
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={movie.title || movie.name || ""}
          width={1280}
          height={462}
          className="w-full max-h-[462px] max-lg:aspect-[16/9] object-cover opacity-80 mix-blend-luminosity "
        />
        {/* Optional: Add the dark bottom fade seen in the screenshot */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <p>{movie.overview}</p>
    </Container>
  );
}
