import { ExerciseSchema } from "@/app/(main)/exercises/_core/exercises.definitions";
import { z } from "zod";

export const NewExerciseSchema = ExerciseSchema.omit({
  isFavorite: true,
  id: true,
});
export type NewExerciseT = z.infer<typeof NewExerciseSchema>;
