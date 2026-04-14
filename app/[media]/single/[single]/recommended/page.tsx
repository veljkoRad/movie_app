import Container from "@/components/UI/Container";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { getRecommendedMovies } from "@/lib/tmdb/movies";
import { getRecommendedShows } from "@/lib/tmdb/shows";

type PageProps = {
  params: Promise<{
    media: string;
    single: string;
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function RecommendedPage({
  params,
  searchParams,
}: PageProps) {
  const { media, single } = await params;
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page ?? "1") || 1);

  if (media !== "movies" && media !== "shows") {
    notFound();
  }

  const data =
    media === "movies"
      ? await getRecommendedMovies(single, currentPage)
      : await getRecommendedShows(single, currentPage);

  const results = data.results;
  const totalPages = data.total_pages;

  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-4">Recommended</h1>

      <div className="flex flex-wrap gap-4 pt-8 justify-center">
        {results.map((item) => (
          <Link
            key={item.id}
            href={`/${media}/single/${item.id}`}
            className="flex flex-col gap-2 w-[228px] max-md:w-[150px] max-sm:w-[90px] mb-16 max-sm:mb-4"
          >
            <Image
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
                  : "/placeholder.jpg"
              }
              alt={"title" in item ? item.title : item.name}
              width={256}
              height={384}
              className="object-cover rounded-lg h-[342px] max-md:h-[225px] max-sm:h-[135px] hover:scale-105 transition-all duration-300"
              placeholder={item.poster_path ? "blur" : "empty"}
              blurDataURL={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w92${item.poster_path}`
                  : undefined
              }
            />
            <p className="font-semibold max-sm:hidden">
              {"title" in item ? item.title : item.name}
            </p>
          </Link>
        ))}
      </div>

      <div className="flex justify-center gap-4 max-sm:mt-4">
        {currentPage > 1 && (
          <Link
            href={`/${media}/single/${single}/recommended?page=${currentPage - 1}`}
            className="px-5 py-1 rounded-xl border-2 border-bor hover:text-blue transition-all duration-300"
          >
            <ChevronLeft size={30} />
          </Link>
        )}
        {currentPage < totalPages && (
          <Link
            href={`/${media}/single/${single}/recommended?page=${currentPage + 1}`}
            className="px-5 py-1 rounded-xl border-2 border-bor hover:text-blue transition-all duration-300"
          >
            <ChevronRight size={30} />
          </Link>
        )}
      </div>
    </Container>
  );
}
