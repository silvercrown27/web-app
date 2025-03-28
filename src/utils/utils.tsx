import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// clsx: Handles conditional class merging.

// twMerge: Helps resolve conflicting Tailwind classes (e.g., bg-red-500 and bg-blue-500—it keeps the last one).

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
