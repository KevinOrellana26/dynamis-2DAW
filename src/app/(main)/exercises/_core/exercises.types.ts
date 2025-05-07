import { z } from "zod";

export const addExerciseToFavoritesSchema = z.object({
  userId: z.string(),
  exerciseId: z.number(),
});

export type addExerciseToFavoritesT = z.infer<
  typeof addExerciseToFavoritesSchema
>;

export const removeErxerciseFromFavoriteSchema = addExerciseToFavoritesSchema
export type removeExerciseFromFavoritesT = z.infer<
  typeof removeErxerciseFromFavoriteSchema
>;