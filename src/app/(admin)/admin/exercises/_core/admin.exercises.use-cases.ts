import { IronSession } from "iron-session";
import {
  getAllExercises,
  getTotalExercises,
  removeExercise,
} from "./admin.exercises.db";
import { SessionData } from "@/app/(auth)/_core/auth/auth.lib";
import { RemoveExerciseT } from "./admin.exercises.definitions";
import { GetExercisesOptionsT } from "@/app/(main)/exercises/_core/exercises.db";
import { ExerciseT } from "@/app/(main)/exercises/_core/exercises.definitions";

type getAllExercisesUseCaseProps = {
  session?: IronSession<SessionData>;
};

// export const getAllExercisesUseCase = async (
//   props: getAllExercisesUseCaseProps
// ) => {
//   const { session } = props;
//   const { role } = session;
//   if(role === "ADMIN"){
//       const response = await getAllExercises();
//       return response;

//   }else{

//   }
// };

export const getAllExercisesUseCase = async (
  options: GetExercisesOptionsT & { page: number; limit: number }
): Promise<{
  exercises: ExerciseT[];
  totalPages: number;
  page: number;
  pageSize: number;
}> => {
  const { query, selectedMuscle, userId, page, limit } = options;

  const totalItems = await getTotalExercises({
    query,
    selectedMuscle,
    userId,
  });

  //calcular el total de páginas
  const totalPages = Math.ceil(totalItems / limit);

  //si la página es inválida, devuelve vacío pero no lanza error
  if (page < 1 || page > totalPages) {
    return {
      exercises: [],
      totalPages,
      page,
      pageSize: limit,
    };
  }

  const exercises = await getAllExercises({
    query,
    selectedMuscle,
    userId,
    skip: (page - 1) * limit,
    take: limit,
  });
  // console.log("Ejercicios", exercises);
  return { exercises, totalPages, page, pageSize: limit };
};


export const removeExerciseUseCase = async ({
  exerciseId,
  role,
}: RemoveExerciseT & { role: string }) => {
  if (role === "ADMIN") {
    const response = await removeExercise({ exerciseId });
    return response;
  }
  const message = "El usuario no puede eliminar un ejercicio";
  throw new Error(message);
};
