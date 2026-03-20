import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className=" border-b-2  sticky top-0 bg-black">
      <div className="max-w-7xl m-auto p-4 flex items-center justify-between ">
        <section className="text-sm tracking-widest font-semibold">
          <div>MOVIES</div>
        </section>
        <SearchBar />
      </div>
    </header>
  );
}
