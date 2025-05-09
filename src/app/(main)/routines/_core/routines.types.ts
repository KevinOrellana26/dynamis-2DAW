import { z } from "zod";

export const addExerciseToRoutineSchema = z.object({
  userId: z.string(),
  exerciseId: z.number(),
});

export type addExercisesToRoutineT = z.infer<typeof addExerciseToRoutineSchema>;

export const removeExercisesFromRoutineSchema = addExerciseToRoutineSchema;
export type removeExercisesToRoutineT = z.infer<
  typeof removeExercisesFromRoutineSchema
>;
