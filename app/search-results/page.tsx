import { searchResults } from "@/lib/tmdb/tmdb";
import Container from "@/components/UI/Container";
import Image from "next/image";
import Link from "next/link";

type SearchProps = { searchParams: Promise<{ query?: string }> };

export default async function SearchResults({ searchParams }: SearchProps) {
  const { query } = await searchParams;
  if (!query) return <p>No search query provided.</p>;
  const data = await searchResults(query, 1);
  const results = data.results;

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Results for "{query}"</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {results.map((result) => (
          <Link
            href={`/movie/${result.id}`}
            key={result.id}
            className="flex flex-col gap-2 w-[185px] "
          >
            <Image
              src={`https://image.tmdb.org/t/p/w185${result.poster_path}`}
              alt={result.title}
              width={185}
              height={278}
              className="object-cover object-center rounded-lg h-[278px]"
            />
            <p className="text-gray-950" key={result.id}>
              {result.title}
            </p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
