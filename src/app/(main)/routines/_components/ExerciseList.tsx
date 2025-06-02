import { handleAsync } from "@/app/_shared/errors";
import { getExercisesUseCase } from "../_core/routines.use-cases";
import ErrorMessage from "../../_components/ErrorMessage";
import CreateRoutineButtonDialog from "./CreateRoutineButtonDialog";

export default async function ExerciseList() {
  const [exercises, error] = await handleAsync(() => getExercisesUseCase());
  if (!exercises) {
    return (
      <ErrorMessage
        message={error?.message || "Error al cargar los ejercicios"}
        path="/routines"
      />
    );
  }

  console.log({ exercises });
  // Paso la lista de ejercicios al formulario
  return <CreateRoutineButtonDialog exercisesList={exercises}/>;
}
