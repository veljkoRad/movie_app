import { Suspense } from "react";
import SearchList from "./SearchList";
import GenreSkeleton from "@/components/UI/GenreSkeleton";

type SearchProps = { searchParams: Promise<{ query?: string; page?: string }> };

export default async function SearchResults({ searchParams }: SearchProps) {
  const { query, page } = await searchParams;
  if (!query) return <p>No search query provided.</p>;

  return (
    <Suspense fallback={<GenreSkeleton />}>
      <SearchList query={query} page={page} />
    </Suspense>
  );
}
