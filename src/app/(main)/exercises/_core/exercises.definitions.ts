import { z } from "zod";
import { ExerciseWithFavoriteT } from "./exercises.db";

export const ExerciseSchema = z.object({
  id: z.number(),
  name: z.string(),
  muscle: z.string(),
  videoImgUrl: z.string(),
  description: z.string(),
  executionSteps: z.string(),
  tips: z.string(),
  isFavorite: z.boolean().optional(),
});
export type ExerciseT = z.infer<typeof ExerciseSchema>;

export const exerciseAdapter = (exercise: ExerciseWithFavoriteT) => {
  return {
    id: exercise.id,
    name: exercise.name,
    muscle: exercise.muscle,
    videoImgUrl: exercise.videoImgUrl,
    description: exercise.description,
    executionSteps: exercise.executionSteps,
    tips: exercise.tips,
    isFavorite: exercise.Favorite.length > 0 ? true : false,
  };
};
