import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function quoteIdentifier(name: string) {
  if (/^[a-z0-9_]+$/.test(name)) {
    return name;
  }
  return `"${name}"`;
}
