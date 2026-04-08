import Container from "@/components/UI/Container";
import { getMoviesByGenre } from "@/lib/tmdb/movies";
import { getShowsByGenre } from "@/lib/tmdb/shows";
import Link from "next/link";
import Image from "next/image";
import { genresMovies, genresShows } from "@/lib/genreCards";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WrapperBg from "@/components/UI/WrapperBg";
export default async function GenrePage({
  params,
  searchParams,
}: {
  params: Promise<{ genre: string; media: "movies" | "shows" }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { genre, media } = await params;
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page ?? "1") || 1);
  const data =
    media === "shows"
      ? await getShowsByGenre(genre, currentPage)
      : await getMoviesByGenre(genre, currentPage);
  const results = data.results;
  const showGenreName = genresShows.find((g) => g.id === parseInt(genre))?.name;
  const movieGenreName = genresMovies.find(
    (g) => g.id === parseInt(genre),
  )?.name;
  const genreName = media === "shows" ? showGenreName : movieGenreName;
  const totalPages = data.total_pages;

  return (
    <WrapperBg>
      <Container>
        <h1 className="text-2xl font-semibold mb-4 capitalize">{genreName}</h1>
        <div className="flex flex-wrap gap-4 pt-8 justify-center">
          {results.map((item) => (
            <Link
              key={item.id}
              href={media === "shows" ? `/tv/${item.id}` : `/movie/${item.id}`}
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
                className="object-cover rounded-lg h-[342px] max-md:h-[225px] max-sm:h-[135px] hover:scale-105 transition-all duration-300 "
              />
              <p className="font-semibold max-sm:hidden">
                {"title" in item ? item.title : item.name}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex justify-center gap-4   max-sm:mt-4">
          {currentPage > 1 && (
            <Link
              href={`/${media}/genre/${genre}?page=${currentPage - 1}`}
              className="px-5 py-1 rounded-xl border-2 border-bor  hover:text-blue transition-all duration-300 "
            >
              <ChevronLeft size={30} />
            </Link>
          )}
          {currentPage < totalPages && (
            <Link
              href={`/${media}/genre/${genre}?page=${currentPage + 1}`}
              className="px-5 py-1 rounded-xl border-2 border-bor  hover:text-blue transition-all duration-300 "
            >
              <ChevronRight size={30} />
            </Link>
          )}
        </div>
      </Container>
    </WrapperBg>
  );
}
