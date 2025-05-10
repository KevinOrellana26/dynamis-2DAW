import {
  // addExerciseToRoutine,
  getRoutines,
  GetRoutinesOptionsT,
  getTotalRoutines,
  removeExerciseFromRoutine,
  RoutineWithExerciseT,
} from "./routines.db";
import {
  removeExercisesToRoutineT
} from "./routines.types";

export const getRoutinesUseCase = async (
  options: GetRoutinesOptionsT & { page: number; limit: number }
): Promise<{
  routines: RoutineWithExerciseT[];
  totalPages: number;
  page: number;
  pageSize: number;
}> => {
  const { limit, page, query, userId } = options;

  const totalRoutines = await getTotalRoutines({
    query,
    userId,
  });
  console.log(`El usuario tiene ${totalRoutines} rutinas.`);

  const totalPages = Math.ceil(totalRoutines / limit);
  if (page < 1 || page > totalPages) {
    return {
      routines: [],
      totalPages,
      page,
      pageSize: limit,
    };
  }

  const routines = await getRoutines({
    query,
    userId,
    skip: (page - 1) * limit,
    take: limit,
  });

  console.log("Rutinas", JSON.stringify(routines, null, 2));
  return { routines, totalPages, page, pageSize: limit };
};

//* Caso de uso que añade un ejercicio a la rutina del usuario.
// export const addExerciseToRoutineUseCase = async (
//   options: addExercisesToRoutineT
// ): Promise<string> => {
//   const message = await addExerciseToRoutine(options);
//   return message;
// };

//* Caso de uso que elimina un ejercicio de la rutina del usuario.
export const removeExerciseFromRoutineUseCase = async (
  options: removeExercisesToRoutineT
): Promise<string> => {
  const message = await removeExerciseFromRoutine(options);
  return message;
};
