import Container from "./Container";

export default function SingleSkeleton() {
  return (
    <Container>
      <div className=" flex max-md:flex-col gap-2 mt-[320px] max-md:mt-[40px] ">
        <div className="relative w-[185px] h-[276px] max-lg:w-[150px] max-lg:h-[224px] max-md:w-[100px] max-md:h-[148px]  rounded-lg bg-white/30 animate-pulse" />
        <div className="flex flex-col justify-evenly gap-2  ">
          <div className="w-[600px] h-[40px] max-lg:w-[400px] max-lg:h-[32px]  rounded-lg bg-white/30 animate-pulse" />
          <div className="flex flex-col gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-[154px] h-[24px] max-lg:w-[110px] max-lg:h-[20px]  rounded-lg bg-white/30 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" mt-20 w-[220px] h-[28px]  rounded-lg bg-white/30 animate-pulse" />
      <div className=" mt-4 w-[850px] h-[72px]  rounded-lg bg-white/30 animate-pulse" />
      <div className=" mt-20 w-[100px] h-[28px]  rounded-lg bg-white/30 animate-pulse" />
      <div className="flex gap-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i}>
            <div className=" mt-4 w-[152px] h-[152px] max-md:w-[96px] max-md:h-[96px]  rounded-full bg-white/30 animate-pulse" />
            <div className=" mt-2 w-[136px] h-[24px] max-md:w-[80px] max-md:h-[20px]  rounded-lg bg-white/30 animate-pulse" />
            <div className=" mt-2 w-[136px] h-[20px] max-md:w-[80px] max-md:h-[16px]  rounded-lg bg-white/30 animate-pulse" />
          </div>
        ))}
      </div>
    </Container>
  );
}
