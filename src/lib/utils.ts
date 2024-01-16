import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//popular utility functions by shadcnUI.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}