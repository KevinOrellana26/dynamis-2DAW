import {
  GetRoutinesOptionsT,
  getTotalRoutines,
  RoutineWithExerciseT,
  getRoutines,
} from "@/app/(main)/routines/_core/routines.db";
import { getAdminTotalRoutines } from "./admin.routines.db";

export const getAllRoutinesUseCase = async (
  options: GetRoutinesOptionsT & { page: number; limit: number }
): Promise<{
  routines: RoutineWithExerciseT[];
  totalPages: number;
  page: number;
  pageSize: number;
}> => {
  const { limit, page, query, userId } = options;

  const totalRoutines = await getAdminTotalRoutines({
    query,
    // userId,
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
    // userId,
    skip: (page - 1) * limit,
    take: limit,
  });

  console.log("Rutinas", JSON.stringify(routines, null, 2));
  return { routines, totalPages, page, pageSize: limit };
};