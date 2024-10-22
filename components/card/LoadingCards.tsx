import React from "react";
import { Skeleton } from "../ui/skeleton";

function LoadingCards() {
  return (
    <section className=" mt-4 gap-8 grid  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </section>
  );
}
export function SkeletonCard() {
  return (
    <div>
      <Skeleton className="h-[300px] rounded-md" />
      <Skeleton className="h-4 mt-4 w-3/4" />
      <Skeleton className="h-4 mt-4 w-1/2" />
    </div>
  );
}

export default LoadingCards;
