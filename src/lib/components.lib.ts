import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Función para combinar clases (ya existentes)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
