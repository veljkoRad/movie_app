"use client";

import { Search } from "lucide-react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const tabs = [
  { label: "Trending", path: "/" },
  { label: "Movies", path: "/movies" },
  { label: "Shows", path: "/shows" },
];

export default function Header() {
  const [search, setSearch] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const getSearch = () => {
    setSearch((prev) => !prev);
  };

  const tabsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const pathname = usePathname();
  const activeIndex = tabs.findIndex((tab) => tab.path === pathname);
  // THis finds index, activeIndex value can be = 0 | 1 | 2

  // if findIndex doesn't find result in array, it returns "-1"
  const isTabRoute = activeIndex !== -1;

  // update underline dimensions when rout changes
  useEffect(() => {
    if (isTabRoute && tabsRef.current[activeIndex]) {
      const activeTab = tabsRef.current[activeIndex];
      if (activeTab) {
        setIndicatorStyle({
          left: activeTab.offsetLeft,
          width: activeTab.offsetWidth,
        });
      }
    }
  }, [pathname, isTabRoute, activeIndex]);
  return (
    <header className=" sticky top-0 bg-black ">
      <div className=" border-b-2 relative z-20 bg-black  ">
        <div className=" max-w-7xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap gap-8 ">
          <div className=" text-md order-1 ">Cinepedia</div>
          <section className="  flex max-md:w-full w-auto max-md:order-3 order-2 justify-center">
            <div className=" flex relative text-sm font-medium uppercase tracking-widest max-md:gap-8 gap-12">
              {tabs.map((tab, index) => (
                <Link
                  key={tab.path}
                  href={tab.path}
                  className=" text-center"
                  ref={(el) => {
                    tabsRef.current[index] = el;
                  }}
                >
                  {tab.label}
                </Link>
              ))}
              {isTabRoute && (
                <span
                  className="absolute bottom-[-13px] h-[2px] bg-primary transition-all duration-300 ease-in-out"
                  style={{
                    left: indicatorStyle.left,
                    width: indicatorStyle.width,
                  }}
                />
              )}
            </div>
          </section>
          <button
            onClick={getSearch}
            className="max-md:order-2 order-3 cursor-pointer"
          >
            <Search className="w-5 " />
          </button>
        </div>
      </div>
      <div
        className="grid transition-[grid-template-rows]  duration-300 ease-in-out"
        style={{
          gridTemplateRows: search ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <SearchBar isVisible={search} isClosed={getSearch} />
        </div>
      </div>
    </header>
  );
}
