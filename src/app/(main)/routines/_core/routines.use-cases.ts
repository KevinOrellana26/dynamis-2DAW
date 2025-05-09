import {
  getRoutines,
  GetRoutinesOptionsT,
  getTotalRoutines,
} from "./routines.db";
import { RoutineT } from "./routines.definitions";

export const getRoutinesUseCase = async (
  options: GetRoutinesOptionsT & { page: number; limit: number }
): Promise<{
  routines: RoutineT[];
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
//* Caso de uso que elimina un ejercicio de la rutina del usuario.
