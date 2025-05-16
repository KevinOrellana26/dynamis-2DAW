import { NotFoundError } from "@/app/_shared/errors";
import { prisma } from "@/lib/prisma";
import { exerciseAdapter } from "../../exercises/_core/exercises.definitions";
import { delay } from "@/lib/utils";
import { RoutineWithExerciseT } from "../../routines/_core/routines.db";

export const getFavoritesCount = async (userId: string) => {
  return await prisma.favorite.count({
    where: {
      userId: userId,
    },
  });
};
export const getRoutineCount = async (userId: string) => {
  return await prisma.routine.count({
    where: {
      userId: userId,
    },
  });
};

//Mostrar 4 ejercicios favoritos si existen, si no, mostrar otros
export const getExercises = async (userId: string) => {
  await delay(1500);
  try {
    const favoriteExerices = await prisma.exercise.findMany({
      where: {
        favorite: {
          some: {
            userId: userId,
          },
        },
      },
      include: {
        favorite: true,
      },
      take: 4,
    });

    let allExercises = [...favoriteExerices];

    if (favoriteExerices.length < 4) {
      const addExercises = await prisma.exercise.findMany({
        where: {
          favorite: {
            none: {
              userId: userId,
            },
          },
        },
        include: {
          favorite: true,
        },
        take: 4 - favoriteExerices.length,
      });
      allExercises = [...favoriteExerices, ...addExercises];
    }

    if (allExercises.length <= 0) {
      const message = "No se han encontrado ejercicios.";
      throw new NotFoundError(message);
    }

    const parsedExercises = allExercises.map((exercises) =>
      exerciseAdapter(exercises)
    );

    return parsedExercises;
  } catch (error) {
    console.error("Error", error);
    const message = "No se han encontrado ejercicios.";
    throw new Error(message);
  }
};

export const getRoutines = async (userId: string) => {
  await delay(1000);
  let routines: RoutineWithExerciseT[];
  try {
    routines = await prisma.routine.findMany({
      where: {
        userId: userId,
      },
      include: {
        exerciseRoutine: {
          include: {
            exercise: {
              select: {
                id: true,
                name: true,
                muscle: true,
                description: true,
                videoImgUrl: true,
                executionSteps: true,
                tips: true,
              },
            },
          },
        },
      },
      take: 3,
    });

    if (routines.length <= 0) {
      const message = "No se han encontrado rutinas para este usuario.";
      throw new NotFoundError(message);
    }
    return routines;
  } catch (error) {
    console.log("Error", error);
    const message = "No se han encontrado rutinas.";
    throw new Error(message);
  }
};
