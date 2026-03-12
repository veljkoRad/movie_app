import { getPopularMovies } from "../lib/tmdb";

// app/page.tsx
export default async function HomePage() {
  const data = await getPopularMovies();
  
  const firstMovie = data.results[1];
  return (
    <main className="p-4">
      <div className="max-w-3xl m-auto">
        <div   className="h-64 bg-cover bg-center rounded-3xl p-6"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${firstMovie.poster_path})`,
            }} >
          <h1 className="text-2xl font-bold mb-4">{firstMovie.title}</h1>
          <p className="text-[var(--text2)]">{firstMovie.overview}</p><p className="text-[var(--text2)]">{firstMovie.popularity}</p>
          <p className="text-[var(--text2)]">{data.total_pages}</p>
        </div>
      </div>
    </main>
  );
}