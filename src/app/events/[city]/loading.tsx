import Skeleton from "@/components/skeleton";
import SkeletonCard from "@/components/skeleton-card";
import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center flex-wrap max-w-[1100px] mx-auto px-[20px] py-24 gap-20">
      {
        // Array.from() creates an array of a given length
        Array.from({ length: 6 }).map((item, i) => (
          <SkeletonCard key={i} />
        ))
      }
    </div>
  );
}

/* === NOTES ===
works only for /events page
wrapped in suspense component since the name of the file is loading.tsx
*/
