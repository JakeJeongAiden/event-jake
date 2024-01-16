import Skeleton from "@/components/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-y-4 pt-28">
      <Skeleton className="h-4 w-[660px]" />
      <Skeleton className="h-4 w-[450px]" />
      <Skeleton className="h-4 w-[550px]" />
    </div>
  );
}

/* === NOTES ===
works only for /event page
*/
