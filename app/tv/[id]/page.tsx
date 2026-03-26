import Container from "@/components/UI/Container";
import Image from "next/image";
import { getTvDetails } from "@/lib/tmdb";

type TvDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function TvDetails({ params }: TvDetailsProps) {
  const { id } = await params;
  const tv = await getTvDetails(id);

  return (
    <Container>
      <h1 className="text-2xl font-bold">{tv.title || tv.name}</h1>
      <p>{tv.overview}</p>
      {tv.poster_path && (
        <Image
          src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
          alt={tv.title || tv.name || ""}
          width={160}
          height={72}
        />
      )}
    </Container>
  );
}
