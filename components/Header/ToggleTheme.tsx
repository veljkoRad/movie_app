"use client";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
export default function ToggleTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const initial = saved ?? "dark";
    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  };
  return (
    <button
      onClick={toggle}
      className="w-[40px]  bg-pure rounded-full border-secondary border-2 cursor-pointer"
    >
      {theme === "dark" ? (
        <div className="bg-secondary p-1 rounded-full w-min translate-x-0 transition-all duration-600 ease-in-out ">
          <Sun className="w-4 h-4" color="black" />
        </div>
      ) : (
        <div className="bg-secondary p-1 rounded-full w-min translate-x-3 transition-all duration-600 ease-in-out ">
          <Moon className="w-4 h-4" color="white" />
        </div>
      )}
    </button>
  );
}
