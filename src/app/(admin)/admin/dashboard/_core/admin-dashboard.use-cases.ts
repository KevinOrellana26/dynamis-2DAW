import {
  getTotalExercises,
  getTotalRoutines,
  getTotalUsers,
} from "./admin-dashboard.db";

export const getTotalExercisesUseCase = async (role: string) => {
  if (role === "ADMIN") {
    const response = await getTotalExercises();
    return response;
  }

  const message = "El usuario no puede ejecutar esta acción";
  throw new Error(message);
};

export const getTotalUsersUseCase = async (role: string) => {
  if (role === "ADMIN") {
    const response = await getTotalUsers();
    return response;
  }
  const message = "El usuario no puede ejecutar esta acción";
  throw new Error(message);
};

export const getTotalRoutinesUseCase = async (role: string) => {
  if (role === "ADMIN") {
    const response = await getTotalRoutines();
    return response;
  }
  const message = "El usuario no puede ejecutar esta acción";
  throw new Error(message);
};
