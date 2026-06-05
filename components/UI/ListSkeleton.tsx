import React from "react";
import Container from "./Container";

const ListSkeleton = () => {
  return (
    <Container>
      <div className="flex justify-between">
        <div className="bg-white/20 animate-pulse h-7 w-28 rounded-lg"></div>
        <div className="bg-white/20 animate-pulse h-7 w-[70px] rounded-lg"></div>
      </div>
      <div className="flex mt-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="w-[164px] h-[246px] animate-pulse bg-white/20 shrink-0 max-w-41 max-sm:max-w-25  flex flex-col gap-1  mr-4 rounded-lg max-sm:w-[100px] max-sm:h-[150px]"
          ></div>
        ))}
      </div>
    </Container>
  );
};

export default ListSkeleton;
