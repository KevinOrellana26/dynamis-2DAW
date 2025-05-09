import { ExerciseT } from "./exercises.definitions";
//Interactura con exercises.db.ts para obtener los datos.
import {
  addExerciseToFavorites,
  getExercises,
  GetExercisesOptionsT,
  removeExerciseFromFavorites,
  getTotalItems,
} from "./exercises.db";
import {
  addExerciseToFavoritesT,
  removeExerciseFromFavoritesT,
} from "./exercises.types";

export const getExercisesUseCase = async (
  options: GetExercisesOptionsT & { page: number; limit: number }
): Promise<{
  exercises: ExerciseT[];
  totalPages: number;
  page: number;
  pageSize: number;
}> => {
  const { query, selectedMuscle, showFavorites, userId, page, limit } = options;

  const totalItems = await getTotalItems({
    query,
    selectedMuscle,
    showFavorites,
    userId,
  });

  //calcular el total de páginas
  const totalPages = Math.ceil(totalItems / limit);

  //si la página es inválida, devuelve vacío pero no lanza error
  if (page < 1 || page > totalPages) {
    return {
      exercises: [],
      totalPages,
      page,
      pageSize: limit,
    };
  }

  const exercises = await getExercises({
    query,
    selectedMuscle,
    showFavorites,
    userId,
    skip: (page - 1) * limit,
    take: limit,
  });
  // console.log("Ejercicios", exercises);
  return { exercises, totalPages, page, pageSize: limit };
};

// * Caso de uso que añade un ejercicio a la lista de favoritos del usuario.
export const addExerciseToFavoritesUseCase = async (
  options: addExerciseToFavoritesT
): Promise<string> => {
  const message = await addExerciseToFavorites(options);
  return message;
};

// * Caso de uso que elimina un ejercicio de la lista de favoritos del usuario.
export const removeExerciseFromFavoritesUseCase = async (
  options: removeExerciseFromFavoritesT
): Promise<string> => {
  const message = await removeExerciseFromFavorites(options);
  return message;
};
