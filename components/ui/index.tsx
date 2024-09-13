import type { ClassValue } from "class-variance-authority/types";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
