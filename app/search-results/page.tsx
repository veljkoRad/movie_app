import { searchResults } from "@/lib/tmdb/tmdb";

type SearchProps = { searchParams: Promise<{ query?: string }> };

export default async function SearchResults({ searchParams }: SearchProps) {
  const { query } = await searchParams;
  if (!query) return <p>No search query provided.</p>;

  const data = await searchResults(query);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Results for "{query}"</h1>
      <ul>
        {data.results.map((movie) => (
          <li className="text-gray-950" key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
