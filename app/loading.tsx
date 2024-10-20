import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex-col items-center space-y-4">
        <Skeleton className="h-4 max-w-xl" />
        <Skeleton className="h-4 max-w-xl" />
        <Skeleton className="h-4 max-w-xl" />
        <Skeleton className="h-4 max-w-xl" />
        <Skeleton className="h-4 max-w-xl" />
      </div>
    </div>
  );
}

export default loading;
