"use client";
import { useState } from "react";
import { searchMoviesAction } from "@/lib/actions";
import type { Movie } from "@/lib/tmdb";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    const movies = await searchMoviesAction(query);
    setResults(movies);
  }

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="relative flex gap-4 w-[193px] items-center"
      >
        <input
          className=" border-gray-950 border-1 h-10 rounded-lg text-gray-50
           p-2 text-gray-950"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit" className=" p-2 rounded-lg absolute right-0">
          <svg height="15px" width="15px" viewBox="0 0 512 512">
            <g>
              <path
                className="st0"
                d="M376.324,312.508c49.638-78.774,40.238-184.326-28.306-252.871c-79.507-79.515-208.872-79.515-288.388,0
              c-79.507,79.516-79.507,208.873,0,288.379c68.536,68.544,174.115,77.935,252.88,28.306l135.668,135.676L512,448.186
              L376.324,312.508z M296.543,296.542c-51.121,51.139-134.308,51.139-185.439,0c-51.121-51.121-51.112-134.299,0.009-185.43
              c51.122-51.121,134.309-51.13,185.43-0.008C347.665,162.243,347.665,245.421,296.543,296.542z"
              />
            </g>
          </svg>
        </button>
      </form>
      <ul>
        {results.map((movie) => (
          <li className="text-gray-950" key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
