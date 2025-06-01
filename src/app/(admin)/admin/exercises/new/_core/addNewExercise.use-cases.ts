import { addNewExercise } from "./addNewExercise.db";
import { NewExerciseT } from "./addNewExercise.definitions";

export const addNewExerciseUseCase = async (
  props: NewExerciseT & { role: string }
) => {
  const { role } = props;
  if (role === "ADMIN") {
    const response = await addNewExercise({ ...props });
    return response;
  }

  const message = "Este usuario no puede crear ejercicios.";
  throw new Error(message);
};
