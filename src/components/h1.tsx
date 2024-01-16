import { cn } from "@/lib/utils";
import React from "react";

type H1Props = {
  children: React.ReactNode;
  className?: string;
};
//passing className for margin bottom. This is a very common pattern.
export default function H1({ children, className }: H1Props) {
  return (
    <h1
      className={cn(
        "text-3xl lg:text-6xl font-bold tracking-tight drop-shadow-md",
        className
      )}
    >
      {children}
    </h1>
  );
}

/* === NOTES ===

## TAILWIND MERGE
1. twMerge will merge classNames together and auto merge conflicting classNames.

*/
