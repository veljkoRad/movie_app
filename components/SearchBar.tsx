"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import Container from "./Container";

type SearchParams = {
  isVisible: Boolean;
  isClosed: () => void;
};

function SearchBar({ isVisible, isClosed }: SearchParams) {
  const [query, setQuery] = useState("");

  // go to search page after type
  const router = useRouter();
  function handleSearch(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search-results?query=${encodeURIComponent(query.trim())}`);
    isClosed();
  }

  // when search bar is opened, put autofocus
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
        return () => clearTimeout(timer);
      }, 350);
    }
  }, [isVisible]);

  return (
    <Container>
      <form
        onSubmit={handleSearch}
        className={`w-full items-center justify-between relative `}
      >
        <input
          ref={inputRef}
          className="border w-full rounded-full color-black bg-tertiary 
           py-3 px-4   text-sm placeholder:text-secondary placeholder:font-medium focus:outline-none outline-none focus:border-primary focus:border-2 transition-all duration-150"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
        <button
          type="submit"
          className="rounded-lg absolute right-8 top-2.5 cursor-pointer"
        >
          <Search className="w-4" />
        </button>
      </form>
    </Container>
  );
}

export default SearchBar;
