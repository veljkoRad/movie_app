import Link from "next/link";
import { getPopularMovies } from "../lib/tmdb";
import SearchBar from "@/components/SearchBar";

// app/page.tsx
export default async function HomePage() {
<<<<<<< HEAD
  const data = await getPopularMovies();  
  const firstMovie = data.results[1];
=======
  const data = await getPopularMovies(1);

  const popularMovies = data.results;
>>>>>>> search-movies
  return (
    <main className="p-4">
      <SearchBar />
      <div className="max-w-3xl m-auto">
<<<<<<< HEAD
        <div   className="h-64 bg-cover bg-center rounded-3xl p-6"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${firstMovie.poster_path})`,
            }} >
          <h1 className="text-2xl font-bold mb-4">{firstMovie.title}</h1>
          <p className="text-[var(--text2)]">{firstMovie.overview}</p><p className="text-[var(--text2)]">{firstMovie.popularity}</p>
        </div>
=======
        {popularMovies.map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            <div
              className="w-[720px] h-[300px] bg-size-[720px] bg-center-left rounded-3xl p-6 "
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
              }}
            >
              <h1 className="text-2xl font-bold mb-4">{movie.title}</h1>
              <p>{movie.overview}</p>
              <p>{movie.popularity}</p>
            </div>
          </Link>
        ))}
>>>>>>> search-movies
      </div>
    </main>
  );
}
