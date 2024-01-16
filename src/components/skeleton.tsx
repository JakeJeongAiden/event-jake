import { cn } from "@/lib/utils";
import React from "react";
type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse h-4 w-[550px] rounded-md bg-accent/20",
        className
      )}
    />
  );
}

/* === NOTES ===
1. This is a reusable component for skeleton loading.
2. Also seen in use by Youtube. 
 */
