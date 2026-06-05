import WrapperBg from "@/components/UI/WrapperBg";
import GenreResults from "./GenreResults";
import { Suspense } from "react";
import GenreSkeleton from "@/components/UI/GenreSkeleton";
export default async function GenrePage({
  params,
  searchParams,
}: {
  params: Promise<{ genre: string; media: "movies" | "shows" }>;
  searchParams: Promise<{ page?: string }>;
}) {
  // I must use Promise, because setTimeout  is callback function and it doesn't work with async/await without Promise

  const { genre, media } = await params;
  const { page } = await searchParams;

  return (
    <WrapperBg>
      <Suspense fallback={<GenreSkeleton />}>
        <GenreResults media={media} page={page} genre={genre} />
      </Suspense>
    </WrapperBg>
  );
}
