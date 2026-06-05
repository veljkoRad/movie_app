// This is different than Suspense, just create loading.tsx in the same folder as your page and it will be used when the page is loading

import SingleSkeleton from "@/components/UI/SingleSkeleton";
export default function Loading() {
  return <SingleSkeleton />;
}
