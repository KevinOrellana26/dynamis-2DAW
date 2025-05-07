//* SOLO interactua con la base de datos

import { NotFoundError } from "@/app/_shared/errors";
import { Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import {
  addExerciseToFavoritesT,
  removeExerciseFromFavoritesT,
} from "./exercises.types";
import { exerciseAdapter } from "./exercises.definitions";

export type GetExercisesOptionsT = {
  query?: string;
  selectedMuscle?: string;
  showFavorites?: boolean;
  userId?: string;
};

export type ExerciseWithFavoriteT = Prisma.ExerciseGetPayload<{
  include: { Favorite: true };
}>;

export const getExercises = async (options: GetExercisesOptionsT) => {
  const { query, selectedMuscle, showFavorites, userId } = options;
  let exercises: ExerciseWithFavoriteT[];

  try {
    // * AND: combina múltiples condiciones, solo se devolverán los
    // * ejercicios que cumplan TODAS las condiciones especificadas dentro del array.
    // * filtra los ejercicios cuyo nombre contenga el valor query (lo mismo para muscle) y es insensible a mayúsculas y minúsculas.
    // * si showFavorites es verdadero y userId está definido, se filtran los ejercicios
    // * que tienen una relación de favoritos con el userId proporcionado.
    // * si showFavorites es falso, no se aplica ningún filtro (se devuelve un objeto vacío).

    exercises = await prisma.exercise.findMany({
      where: {
        AND: [
          { name: { contains: query, mode: "insensitive" } },
          { muscle: { contains: selectedMuscle, mode: "insensitive" } },
          showFavorites && userId
            ? {
                Favorite: {
                  some: {
                    user_id: userId, // Filtra por el userId en la tabla de favoritos
                  },
                },
              }
            : {},
        ],
      },
      include: {
        Favorite: true,
      },
    });
  } catch (error) {
    console.log("Error", error);
    const message = "No se han encontrado ejercicios.";
    throw new Error(message);
  }

  if (exercises.length <= 0) {
    const message = "No se han encontrado ejercicios.";
    throw new NotFoundError(message);
  }
  const parsedExercises = exercises.map(exerciseAdapter);

  return parsedExercises;
};

//TODO: addExerciseToFavorites -> cuando se pulse el botón de estrella, se debe de añadir a la lista de favoritos del usuario.
//TODO: se le pasa como parámetro el id del ejercicio y el id del usuario.
export const addExerciseToFavorites = async (
  params: addExerciseToFavoritesT
) => {
  const { exerciseId, userId } = params;
  try {
    const favorite = await prisma.favorite.create({
      data: {
        user_id: userId,
        exercise_id: exerciseId,
      },
    });

    if (!favorite) {
      const message = "No se ha podido añadir el ejercicio a favoritos.";
      throw new Error(message);
    }
    const message = "Ejercicio añadido a favoritos";
    return message;
  } catch (error) {
    console.log("Error", error);
    const message = "No se ha podido añadir el ejercicio a favoritos.";
    throw new Error(message);
  }
};

export const removeExerciseFromFavorites = async (
  params: removeExerciseFromFavoritesT
) => {
  const { exerciseId, userId } = params;
  try {
    const favorite = await prisma.favorite.deleteMany({
      where: {
        user_id: userId,
        exercise_id: exerciseId,
      },
    });

    if (!favorite) {
      const message = "No se ha podido eliminar el ejercicio de favoritos.";
      return message;
    }

    const message = "Ejercicio eliminado de favoritos";
    return message;
  } catch (error) {
    console.log("Error", error);
    const message = "No se ha podido eliminar el ejercicio de favoritos.";
    throw new Error(message);
  }
};
