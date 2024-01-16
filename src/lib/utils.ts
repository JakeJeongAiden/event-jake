import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//popular utility functions by shadcnUI.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(string: string) {
  return string
    .split("%20")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
