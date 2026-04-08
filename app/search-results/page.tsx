import { searchResults } from "@/lib/tmdb/tmdb";
import Container from "@/components/UI/Container";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SearchProps = { searchParams: Promise<{ query?: string; page?: string }> };

export default async function SearchResults({ searchParams }: SearchProps) {
  const { query, page } = await searchParams;
  if (!query) return <p>No search query provided.</p>;
  const currentPage = Math.max(1, Number(page ?? "1") || 1);
  const data = await searchResults(query, currentPage);
  console.log(data);
  const results = data.results.filter(
    (result) => result.media_type === "movie" || result.media_type === "tv",
  );
  const totalPages = data.total_pages;

  return (
    <Container>
      <h1 className="text-2xl max-sm:text-lg font-semibold  mb-4">
        Results for: "{query}"
      </h1>
      <div className="flex flex-wrap gap-4  pt-16 justify-center ">
        {results.map((result) => (
          <Link
            href={`${result.media_type === "movie" ? "/movie" : "/tv"}/${result.id}`}
            key={result.id}
            className="flex flex-col gap-2 w-[228px] max-md:w-[150px] max-sm:w-[90px]  mb-16 max-sm:mb-4 "
          >
            <Image
              src={`https://image.tmdb.org/t/p/w342${result.poster_path}`}
              alt={"title" in result ? result.title : result.name}
              width={256}
              height={384}
              className="object-cover object-center rounded-lg h-[342px] max-md:h-[225px] max-sm:h-[135px] hover:scale-105 transition-all duration-300 "
            />
            <p
              className="text-gray-950 font-semibold max-sm:hidden"
              key={result.id}
            >
              {"title" in result ? result.title : result.name}
            </p>
          </Link>
        ))}
      </div>
      <div className=" flex justify-center gap-4  max-sm:mt-8">
        {currentPage > 1 && (
          <Link
            href={`/search-results?query=${encodeURIComponent(query)}&page=${currentPage - 1}`}
            className="px-4 py-2 rounded border-2 border-bor hover:text-blue transition-all duration-300  "
          >
            <ChevronLeft size={30} />
          </Link>
        )}
        {currentPage < totalPages && (
          <Link
            href={`/search-results?query=${encodeURIComponent(query)}&page=${currentPage + 1}`}
            className="px-4 py-2 rounded border-2 border-bor hover:text-blue transition-all duration-300 "
          >
            <ChevronRight size={30} />
          </Link>
        )}
      </div>
    </Container>
  );
}
