import { getExercises, getFavoritesCount, getRoutineCount, getRoutines } from "./dashboard.db";

export const getExercisesDashboardUseCase = async (userId: string) => {
  const exercises = await getExercises(userId);
  return { exercises };
};

export const getRoutinesDashboardUseCase = async (userId: string) => {
  const routines = await getRoutines(userId);
  return routines;
};
export const getFavoritesCountUseCase = async (userId: string) => {
  const routines = await getFavoritesCount(userId);
  return routines;
};
export const getRoutinesCountUseCase = async (userId: string) => {
  const routines = await getRoutineCount(userId);
  return routines;
};
