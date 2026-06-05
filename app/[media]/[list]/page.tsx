import { Suspense } from "react";
import CategoryResult from "./CategoryResult";
import WrapperBg from "@/components/UI/WrapperBg";
import GenreSkeleton from "@/components/UI/GenreSkeleton";

type Props = {
  params: Promise<{ media: string; list: string }>;
  searchParams: Promise<{ page?: string }>;
};

export default async function BrowseByList({ params, searchParams }: Props) {
  const { media, list } = await params;
  const { page } = await searchParams;

  return (
    <WrapperBg>
      <Suspense fallback={<GenreSkeleton />}>
        <CategoryResult
          page={Number(page ?? "1") || 1}
          media={media}
          list={list}
        />
      </Suspense>
    </WrapperBg>
  );
}
