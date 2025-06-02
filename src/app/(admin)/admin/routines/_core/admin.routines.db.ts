import { GetRoutinesOptionsT } from "@/app/(main)/routines/_core/routines.db";
import { NotFoundError } from "@/app/_shared/errors";
import { prisma } from "@/lib/prisma";

export const getAdminTotalRoutines = async (
  options: GetRoutinesOptionsT
): Promise<number> => {
  const { query, userId } = options;

  try {
    const totalRoutines = await prisma.routine.count();
    if (totalRoutines <= 0) {
      const message = "No se han encontrado rutinas";
      throw new NotFoundError(message);
    }
    return totalRoutines;
  } catch (error) {
    console.log("Error al obtener rutinas", error);
    const message = "No se han encontrado rutinas.";
    throw new Error(message);
  }
};
