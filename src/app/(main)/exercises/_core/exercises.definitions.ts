import { z } from "zod";
import { ExerciseWithFavoriteT } from "./exercises.db";

export const ExerciseSchema = z.object({
  id: z.number(),
  name: z.string(),
  muscle: z.string(),
  videoImgUrl: z.string(),
  isFavorite: z.boolean().optional(),
});
export type ExerciseT = z.infer<typeof ExerciseSchema>;

export const exerciseAdapter = (exercise: ExerciseWithFavoriteT) => {
  return {
    id: exercise.id,
    name: exercise.name,
    muscle: exercise.muscle,
    videoImgUrl: exercise.video_img_url,
    isFavorite: exercise.Favorite.length > 0 ? true : false,
  };
};
