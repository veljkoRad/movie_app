import Container from "../UI/Container";

export default function HeroSkeleton() {
  return (
    <Container>
      <div className="h-10 w-40 bg-white/20 rounded mb-6 animate-pulse" />
      <div className="flex gap-4 flex-wrap  justify-between max-lg:justify-center">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="h-[342px] w-[228px] bg-white/20 rounded mb-6 animate-pulse"
          />
        ))}
      </div>
    </Container>
  );
}
