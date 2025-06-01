import ErrorMessage from "@/app/(main)/_components/ErrorMessage";
import EditExerciseCard from "./_components/EditExerciseCard";
import { handleAsync } from "@/app/_shared/errors";
import { getExerciseUseCase } from "./_core/edit-exercise.use-cases";

export default async function EditExercisePage({
  params,
}: {
  params: { exerciseId: string };
}) {
  const exerciseId = params.exerciseId;

  const [exercise, error] = await handleAsync(() =>
    getExerciseUseCase(exerciseId)
  );

  if (!exercise) {
    return (
      <ErrorMessage
        message={error?.message || "Ocurrió un error al cargar el ejercicio"}
        path="/admin/exercises"
      />
    );
  }

  return (
    <>
      <EditExerciseCard exercise={exercise} />
    </>
  );
}
