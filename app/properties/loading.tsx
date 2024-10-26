import React from "react";
import LoadingCards from "@/components/card/LoadingCards";
import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <div>
      <Skeleton className="w-full h-[400px] rounded-lg mt-8" />
    </div>
  );
}

export default loading;
