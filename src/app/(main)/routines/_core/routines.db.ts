import { prisma } from "@/lib/prisma";
import { NotFoundError } from "@/app/_shared/errors";
import { Prisma } from "@/generated/prisma";
// import {
//   addExercisesToRoutineT,
//   removeExercisesToRoutineT,
// } from "@/app/(main)/routines/_core/routines.types";
import { delay } from "@/lib/utils";

export type GetRoutinesOptionsT = {
  query?: string;
  userId?: string;
};

export type RoutineWithExerciseT = Prisma.routineGetPayload<{
  include: { exerciseRoutine: true };
}>;

export const getRoutines = async (
  options: GetRoutinesOptionsT & { skip: number; take: number }
) => {
  await delay(1000);
  const { skip, take, userId, query } = options;
  let routines: RoutineWithExerciseT[];

  try {
    routines = await prisma.routine.findMany({
      where: {
        AND: [
          { userId: userId },
          { name: { contains: query, mode: "insensitive" } },
        ],
      },
      skip,
      take,
      include: {
        exerciseRoutine: {
          include: {
            exercise: true,
          },
        },
      },
    });

    if (routines.length <= 0) {
      const message = "No se han encontrado ejercicios.";
      throw new NotFoundError(message);
    }
    return routines;
  } catch (error) {
    console.log("Error", error);
    const message = "No se han encontrado rutinas.";
    throw new Error(message);
  }
};

export const getTotalRoutines = async (
  options: GetRoutinesOptionsT
): Promise<number> => {
  const { query, userId } = options;

  try {
    const totalRoutines = await prisma.routine.count({
      where: {
        userId: userId,
        // AND: [
        // { userId: userId },
        // { name: { contains: query, mode: "insensitive" } },
        // ],
      },
    });
    if (totalRoutines <= 0) {
      const message = "No se han encontrado rutinas para este usuario.";
      throw new NotFoundError(message);
    }
    return totalRoutines;
  } catch (error) {
    console.log("Error al obtener rutinas para este usuario: ", error);
    const message = "No se han encontrado rutinas para este usuario.";
    throw new Error(message);
  }
};

//Añadir ejercicio a rutina
//Eliminar ejercicio de rutina
