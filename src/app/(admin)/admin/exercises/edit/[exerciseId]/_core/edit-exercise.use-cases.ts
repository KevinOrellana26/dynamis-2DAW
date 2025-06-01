import { getSession } from "@/app/(auth)/_core/auth/auth.actions";
import { editExercise, getExercise } from "./edit-exercise.db";
import { EditExerciseFormActionT } from "./edit-exercise.definitions";

export const getExerciseUseCase = async (exerciseId: string) => {
  const id = Number(exerciseId);
  const session = await getSession();
  if (session.role === "ADMIN") {
    const response = await getExercise(id);
    return response;
  }

  const message = "El usuario no puede obtener los datos de un ejercicio.";
  throw new Error(message);
};

export const editExerciseUseCase = async (
  props: EditExerciseFormActionT,
  role: string
) => {
  if (role === "ADMIN") {
    const response = await editExercise(props);
    return response;
  }

  const message = "El usuario no puede actualizar los datos del ejercicio.";
  throw new Error(message);
};
