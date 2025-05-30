import { z } from "zod";

export const RemoveExerciseSchema = z.object({
  exerciseId: z.number(),
});
export type RemoveExerciseT = z.infer<typeof RemoveExerciseSchema>;
