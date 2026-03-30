"use client";
import Container from "../UI/Container";

export default function Footer() {
  return (
    <Container>
      <div className="flex max-sm:flex-col gap-4 justify-between items-center pb-6 cursor-pointer">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Cinepedia
        </button>
        <div>© {new Date().getFullYear()} Cinepedia. All rights reserved.</div>
      </div>
    </Container>
  );
}
