import { NotFoundError } from "@/app/_shared/errors";
import { prisma } from "@/lib/prisma";
import { RemoveExerciseT } from "./admin.exercises.definitions";
import { GetExercisesOptionsT } from "@/app/(main)/exercises/_core/exercises.db";
import { delay } from "@/lib/utils";
import { exerciseAdapter } from "@/app/(main)/exercises/_core/exercises.definitions";

export const getTotalExercises = async (options: GetExercisesOptionsT) => {
  const { query, selectedMuscle } = options;
  try {
    const totalItems = await prisma.exercise.count({
      where: {
        AND: [
          { name: { contains: query, mode: "insensitive" } },
          { muscle: { contains: selectedMuscle, mode: "insensitive" } },
        ],
      },
    });

    if (totalItems <= 0) {
      const message = "No se han encontrado ejercicios.";
      throw new NotFoundError(message);
    }

    return totalItems;
  } catch (error) {
    console.log("Error", error);
    const message = "No se han encontrado ejercicios.";
    throw new Error(message);
  }
};

export const getAllExercises = async (
  options: GetExercisesOptionsT & { skip: number; take: number }
) => {
  await delay(1500);
  const { query, selectedMuscle, skip, take } = options;
  try {
    const exercises = await prisma.exercise.findMany({
      where: {
        AND: [
          { name: { contains: query, mode: "insensitive" } },
          { muscle: { contains: selectedMuscle, mode: "insensitive" } },
        ],
      },
      skip, // página los resultados
      take, //numero de resultados por página
    });

    if (exercises.length <= 0) {
      const message = "No se han encontrado ejercicios.";
      throw new NotFoundError(message);
    }

    return exercises;
  } catch (error) {
    console.log("Error", error);
    const message = "No se han encontrado ejercicios.";
    throw new Error(message);
  }
};

export const removeExercise = async ({ exerciseId }: RemoveExerciseT) => {
  try {
    const exercise = await prisma.exercise.delete({
      where: {
        id: exerciseId,
      },
    });

    if (!exercise) {
      const message = "No se ha podido eliminar el ejercicio";
      throw new Error(message);
    }

    const message = "Ejercicio eliminado correctamente";
    return message;
  } catch (error) {
    console.log("Error", error);
    const message = "No se ha podido eliminar el ejercicio.";
    throw new Error(message);
  }
};
