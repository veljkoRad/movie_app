import Link from "next/link";

export default function BannerSide({ sideMovies }: { sideMovies: any[] }) {
  return (
    <section className=" flex flex-col gap-10 relative min-w-89 max-lg:hidden ">
      <h2>Trending</h2>
      {sideMovies.map((movie) => (
        <div key={movie.id} className="flex gap-4">
          <Link href={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="w-40 h-18 object-cover rounded-lg hover:opacity-20 transition-all duration-300"
            />
          </Link>
          <div>
            <div className="text-xs">{movie.title || movie.name}</div>
            <div className="text-xs">
              {movie.release_date?.slice(0, 4) ||
                movie.first_air_date?.slice(0, 4)}
            </div>
            <div className="text-xs">
              ★&nbsp;
              {movie.vote_average > 0 ? movie.vote_average.toFixed(1) : "N/A"}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
