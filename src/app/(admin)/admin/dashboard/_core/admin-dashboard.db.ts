import { NotFoundError } from "@/app/_shared/errors";
import { prisma } from "@/lib/prisma";

export const getTotalExercises = async () => {
  try {
    const exercises = await prisma.exercise.count();
    if (exercises <= 0) {
      const message = "No se han encontrado ejercicios";
      throw new NotFoundError(message);
    }

    return exercises;
  } catch (error) {
    console.error("Error", error);
    const message = "No se han encontrado ejercicios";
    throw new NotFoundError(message);
  }
};

export const getTotalUsers = async () => {
  try {
    const users = await prisma.user.count();
    if (users <= 0) {
      const message = "No se han encontrado usuarios";
      throw new NotFoundError(message);
    }

    return users;
  } catch (error) {
    console.error("Error", error);
    const message = "No se han encontrado ejercicios";
    throw new NotFoundError(message);
  }
};

export const getTotalRoutines = async () => {
  try {
    const routines = await prisma.routine.count();
    if (routines <= 0) {
      const message = "No se han encontrado ejercicios";
      throw new NotFoundError(message);
    }

    return routines;
  } catch (error) {
    console.error("Error", error);
    const message = "No se han encontrado ejercicios";
    throw new NotFoundError(message);
  }
};
