import Container from "../UI/Container";

export default function HeroSkeleton() {
  return (
    <Container>
      <div className="flex gap-6  justify-between max-lg:justify-center">
        {/* BannerSlide Skeleton */}
        <div className="min-w-0 flex-1">
          <div className="relative w-full h-[462px] max-lg:h-auto max-lg:aspect-[16/9] max-sm:aspect-[4/3] rounded-[40px] bg-white/30 animate-pulse" />
        </div>

        {/* BannerSide Skeleton */}
        <div className="flex flex-col justify-between min-w-89 max-xl:hidden gap-4">
          {/* Heading */}
          <div className="h-7 w-40 bg-white/20 rounded animate-pulse" />

          {/* 3 items */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex gap-3">
              {/* Image placeholder */}
              <div className="min-w-[199px] w-[199px] h-28 bg-white/20 rounded-lg animate-pulse" />

              {/* Text content */}
              <div className="flex flex-col gap-2 flex-1">
                <div className="h-5 bg-white/20 rounded w-full animate-pulse" />
                <div className="h-4 bg-white/20 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-white/20 rounded w-1/2 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
