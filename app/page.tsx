import Link from "next/link";
import { getPopularMovies } from "../lib/tmdb";
import Header from "@/components/Header";
import Carousel from "@/components/Carousell";

// app/page.tsx
export default async function HomePage() {
  const data = await getPopularMovies(1);
  const bannerMovies = data.results.slice(0, 4);

  return (
    <div>
      <Header />
      <main className="p-4">
        <div className="max-w-[720px] m-auto ">
          <Carousel>
            {bannerMovies.map((movie) => (
              <Link href={`/movie/${movie.id}`} key={movie.id}>
                <div
                  className="w-[720px] h-[300px] bg-cover bg-center  rounded-[40px] p-6 flex items-end "
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), transparent), url(https://image.tmdb.org/t/p/w780${movie.poster_path}`,
                  }}
                >
                  <section>
                    <div>{movie.release_date.slice(0, 4)}</div>
                    <h1 className="text-5xl font-medium tracking-wide">
                      {movie.title}
                    </h1>
                    <div>
                      {movie.vote_average > 0
                        ? movie.vote_average.toFixed(1)
                        : "N/A"}
                    </div>
                  </section>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </main>
    </div>
  );
}
