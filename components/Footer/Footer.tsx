"use client";
import Image from "next/image";
import Container from "../UI/Container";

export default function Footer() {
  return (
    <Container>
      <div className="flex flex-col gap-4 justify-between items-center pb-6 ">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer"
        >
          <Image
            src="/cinepedia_logo.png"
            alt="logo"
            width={150}
            height={165}
            className="h-[70px] w-auto"
          />
        </button>
        <div>© {new Date().getFullYear()} Cinepedia All rights reserved.</div>
      </div>
    </Container>
  );
}
