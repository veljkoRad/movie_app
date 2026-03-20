"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search-results?query=${encodeURIComponent(query.trim())}`);
  }

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="relative flex gap-4 w-[193px] items-center justify-between "
      >
        <input
          className="border h-10 w-[193px] rounded-full text-secondary
           p-3  border-border"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button
          type="submit"
          className=" p-2 rounded-lg absolute right-3 cursor-pointer"
        >
          <svg height="15px" width="15px" viewBox="0 0 512 512">
            <g>
              <path
                d="M376.324,312.508c49.638-78.774,40.238-184.326-28.306-252.871c-79.507-79.515-208.872-79.515-288.388,0
              c-79.507,79.516-79.507,208.873,0,288.379c68.536,68.544,174.115,77.935,252.88,28.306l135.668,135.676L512,448.186
              L376.324,312.508z M296.543,296.542c-51.121,51.139-134.308,51.139-185.439,0c-51.121-51.121-51.112-134.299,0.009-185.43
              c51.122-51.121,134.309-51.13,185.43-0.008C347.665,162.243,347.665,245.421,296.543,296.542z"
                style={{ fill: "#ffffff" }}
              />
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
