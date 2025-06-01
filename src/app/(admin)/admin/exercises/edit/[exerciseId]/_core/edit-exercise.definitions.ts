import { ExerciseSchema } from "@/app/(main)/exercises/_core/exercises.definitions";
import { z } from "zod";

export const EditExerciseFormSchema = ExerciseSchema.omit({
  id: true,
  isFavorite: true,
});
export type EditExerciseFormT = z.infer<typeof EditExerciseFormSchema>;

export const EditExerciseFormActionSchema = EditExerciseFormSchema.extend({
  id: z.number(),
});
export type EditExerciseFormActionT = z.infer<typeof EditExerciseFormActionSchema>;
