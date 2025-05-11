import { NotFoundError } from "@/app/_shared/errors";
import { Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { delay } from "@/lib/utils";
import { CreateRoutineUseCaseInput, RemoveRoutineT } from "./routines.types";

export const createRoutine = async (params: CreateRoutineUseCaseInput) => {
  const { name, userId, description } = params;
  try {
    const existingRoutine = await prisma.routine.findFirst({
      where: {
        name,
        userId,
      },
    });

    if (existingRoutine) {
      const message = "Ya existe una rutina con ese nombre.";
      throw new Error(message);
    }

    const routine = await prisma.routine.create({
      data: {
        userId: userId,
        name: name,
        description: description || "",
        duration: 0,
        totalExercises: 0,
      },
    });

    if (!routine) {
      const message = "No se ha podido crear la rutina.";
      throw new Error(message);
    }
    const message = `Rutina "${routine.name}" creada correctamente.`;
    return message;
  } catch (error) {
    console.log("Error", error);
    const message = "No se ha podido crear la rutina.";
    throw new Error(message);
  }
};

export type GetRoutinesOptionsT = {
  query?: string;
  userId?: string;
};

export type RoutineWithExerciseT = Prisma.routineGetPayload<{
  include: {
    exerciseRoutine: {
      include: {
        exercise: true;
      };
    };
  };
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
            exercise: {
              select: {
                id: true,
                name: true,
                muscle: true,
              },
            },
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

export const removeRoutine = async (params: RemoveRoutineT) => {
  const { userId, routineId } = params;
  try {
    const routine = await prisma.routine.delete({
      where: {
        id: routineId,
        userId: userId,
      },
    });

    if (!routine) {
      const message = "No se ha podido eliminar la rutina.";
      return message;
    }

    const message = "Rutina eliminada correctamente.";
    return message;
  } catch (error) {
    console.log("Error", error);
    const message = "No se ha podido eliminar la rutina.";
    throw new Error(message);
  }
};

//Añadir ejercicio a rutina
// export const addExerciseToRoutine = async (params: addExerciseToFavoritesT) => {
//   const { exerciseId, userId } = params;
//   try {
//     const exercise = await prisma.exerciseRoutine.create({
//       data: {
//         exerciseId: exerciseId,
//       },
//     });

//     if (!exercise) {
//       const message = "No se ha podido añadir el ejercio a la rutina.";
//       throw new Error(message);
//     }
//     const message = "Ejercicio añadido a rutina.";
//     return message;
//   } catch (error) {
//     console.log("Error", error);
//     const message = "No se ha podido añadir el ejercicio a la rutina.";
//     throw new Error(message);
//   }
// };

//Eliminar ejercicio de rutina
// export const removeExerciseFromRoutine = async (
//   params: removeExercisesToRoutineT
// ) => {
//   const { exerciseId, userId } = params;
//   try {
//     const exercise = await prisma.exerciseRoutine.deleteMany({
//       where: {
//         exerciseId: exerciseId,
//       },
//     });

//     if (!exercise) {
//       const message = "No se ha podido eliminar el ejercicio de favoritos.";
//       return message;
//     }

//     const message = "Ejercicio eliminado de la rutina.";
//     return message;
//   } catch (error) {
//     console.log("Error", error);
//     const message = "No se ha podido eliminar el ejercicio de la rutina.";
//     throw new Error(message);
//   }
// };
