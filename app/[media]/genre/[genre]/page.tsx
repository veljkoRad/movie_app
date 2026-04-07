import Container from "@/components/UI/Container";
import { getMoviesByGenre } from "@/lib/tmdb/movies";
import Link from "next/link";
import Image from "next/image";

export default async function GenrePage({
  params,
}: {
  params: Promise<{ genre: string }>;
}) {
  const { genre } = await params;
  const data = await getMoviesByGenre(genre);
  const results = data.results;
  console.log(results);
  return (
    <Container>
      <div className="flex flex-wrap gap-4 pt-8 justify-center">
        {results.map((item) => (
          <Link
            key={item.id}
            href={`/movie/${item.id}`}
            className="flex flex-col gap-2 w-[228px] max-md:w-[150px] max-sm:w-[90px] mb-16 max-sm:mb-4"
          >
            <Image
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
                  : "/placeholder.jpg"
              }
              alt={item.title}
              width={256}
              height={384}
              className="object-cover rounded-lg h-[342px] max-md:h-[225px] max-sm:h-[135px]"
            />
            <p className="font-semibold max-sm:hidden">{item.title}</p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
