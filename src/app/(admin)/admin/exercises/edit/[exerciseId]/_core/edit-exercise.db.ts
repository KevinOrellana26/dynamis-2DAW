import { NotFoundError } from "@/app/_shared/errors";
import { prisma } from "@/lib/prisma";
import { delay } from "@/lib/utils";
import { EditExerciseFormActionT } from "./edit-exercise.definitions";

export const getExercise = async (id: number) => {
  await delay(1500);

  try {
    const exercise = await prisma.exercise.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        muscle: true,
        videoImgUrl: true,
        description: true,
        executionSteps: true,
        tips: true,
      },
    });

    if (!exercise) {
      const message = "No se ha encontrado el ejercicio.";
      throw new NotFoundError(message);
    }
    return exercise;
  } catch (error) {
    console.error("Error", error);
    const message = "No se ha encontrado el ejercicio.";
    throw new Error(message);
  }
};

export const editExercise = async (props: EditExerciseFormActionT) => {
  const { id, name, muscle, videoImgUrl, description, executionSteps, tips } =
    props;
  try {
    const exercise = await prisma.exercise.update({
      where: { id: id },
      data: {
        name: name,
        muscle: muscle,
        videoImgUrl: videoImgUrl,
        description: description,
        executionSteps: executionSteps,
        tips: tips,
      },
    });

    if (!exercise) {
      const message = "No se ha podido actualizar los datos del ejercicio.";
      throw new Error(message);
    }

    const message = "Ejercicio actualizado correctamente.";
    return message;
  } catch (error) {
    console.error("Error", error);
    const message = "No se ha podido actualizar los datos del ejercicio.";
    throw new Error(message);
  }
};
