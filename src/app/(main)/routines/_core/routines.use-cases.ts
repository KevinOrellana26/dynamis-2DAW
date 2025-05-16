import {
  createRoutine,
  getExercises,
  getRoutines,
  GetRoutinesOptionsT,
  getTotalRoutines,
  removeRoutine,
  RoutineWithExerciseT,
} from "./routines.db";
import {
  CreateRoutineT,
  ExerciseT,
  RemoveRoutineT,
} from "./routines.definitions";

export const getExercisesUseCase = async (): Promise<ExerciseT[]> => {
  const exercises = await getExercises();
  return exercises;
};

export const createRoutineUseCase = async (
  params: CreateRoutineT
): Promise<string> => {
  console.log("Datos enviados al caso de uso:", params);
  const message = await createRoutine(params);
  return message;
};

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

export const removeRoutineUseCase = async (
  options: RemoveRoutineT
): Promise<string> => {
  const message = await removeRoutine(options);
  return message;
};

//* Caso de uso que añade un ejercicio a la rutina del usuario.
// export const addExerciseToRoutineUseCase = async (
//   options: addExercisesToRoutineT
// ): Promise<string> => {
//   const message = await addExerciseToRoutine(options);
//   return message;
// };

//* Caso de uso que edita los datos de un ejercicio en una rutina
export const updateExerciseToRoutineUseCase = async () => {};

//* Caso de uso que elimina un ejercicio de la rutina del usuario.
// export const removeExerciseFromRoutineUseCase = async (
//   options: RemoveExercisesToRoutineT
// ): Promise<string> => {
//   const message = await removeExerciseFromRoutine(options);
//   return message;
// };
