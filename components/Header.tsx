"use client";

import SearchBar from "./SearchBar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Trending", path: "/" },
  { label: "Movies", path: "/movies" },
  { label: "Shows", path: "/shows" },
];

export default function Header() {
  const pathname = usePathname();
  const activeIndex = tabs.findIndex((tab) => tab.path === pathname);
  // THis finds index, activeIndex value can be = 0 | 1 | 2
  const left = activeIndex * 120;
  return (
    <header className=" border-b-2  sticky top-0 bg-black">
      <div className="max-w-7xl m-auto p-3 flex items-center justify-between flex-wrap gap-2">
        <div className="text-md ">Cinepedia</div>

        <section className="text-sm tracking-widest  flex relative   ">
          {tabs.map((tab) => (
            <Link key={tab.path} href={tab.path} className="w-30 text-center">
              {tab.label}
            </Link>
          ))}
          <span
            className="absolute bottom-[-23px] h-[2px] w-30 bg-primary transition-all duration-300"
            style={{ left }}
          />
        </section>
        <div className=" ">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
