//Interactura con exercises.db.ts para obtener los datos.
import type { Exercise } from "@/generated/prisma";
import {
  addExerciseToFavorites,
  getExercises,
  GetExercisesOptionsT,
} from "./exercises.db";
import { addExerciseToFavoritesT } from "./exercises.types";

// * Caso de uso que obtiene los ejercicios de la base de datos.
// * getExercises recibe un objeto de parametros opcionales.
// * dependiendo de los parametros que se pasen, se filtran los ejercicios.
// * devuelve un array de ejercicios que cumplen con los filtros.
// * si no, se muestra un mensaje de error.
export const getExercisesUseCase = async (options: GetExercisesOptionsT) => {
  const exercises = await getExercises(options);
  return exercises;
};

// * Caso de uso que añade un ejercicio a la lista de favoritos del usuario.

export const addExerciseToFavoritesUseCase = async (
  options: addExerciseToFavoritesT
): Promise<string> => {
  // comprobar que el usuario esta logueado
  const message = await addExerciseToFavorites(options);
  return message;
};
