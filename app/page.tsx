import Link from "next/link";
import { getPopularMovies } from "../lib/tmdb";
import Header from "@/components/Header";

// app/page.tsx
export default async function HomePage() {
  const data = await getPopularMovies(1);

  const popularMovies = data.results;
  return (
    <>
      <Header />
      <main className="p-4">
        <div className="max-w-3xl m-auto">
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
        </div>
      </main>
    </>
  );
}
