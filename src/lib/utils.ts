import { ExerciseT } from "@/app/(main)/exercises/_core/exercises.definitions";

export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function sortExercisesByName(exercises: ExerciseT[]) {
  return exercises.toSorted((a, b) => a.name.localeCompare(b.name));
}
