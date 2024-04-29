import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateYAxis(data: any[]): { yAxisLabels: any[], topLabel: any } {
  // Implement your logic here
  const yAxisLabels = data; // Replace this with your actual logic
  const topLabel = data[0]; // Replace this with your actual logic

  return { yAxisLabels, topLabel };
}

export function generatePagination(totalPages: number): number[] {
  // Implement your pagination logic here
  return Array.from({ length: totalPages }, (_, i) => i + 1);
}