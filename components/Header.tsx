import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="p-4 border-b flex items-center justify-between sticky top-0 bg-black">
      <section>
        <div>Movie</div>
      </section>
      <SearchBar />
    </header>
  );
}
