import { prisma } from "@/lib/prisma";
import { NewExerciseT } from "./addNewExercise.definitions";

export const addNewExercise = async (props: NewExerciseT) => {
  const { description, executionSteps, muscle, name, tips, videoImgUrl } =
    props;
  try {
    //COMPROBAR QUE EL NOMBRE DEL EJERCICIO NO EXISTA EN LA BASE DE DATOS.
    const existingExercise = await prisma.exercise.findFirst({
      where: {
        name: name,
      },
    });

    if (existingExercise) {
      const message = "Ya existe un ejercicio con ese nombre.";
      throw new Error(message);
    }

    //CREO EL NUEVO EJERCICIO
    const createdExercise = await prisma.exercise.create({
      data: {
        name: name,
        videoImgUrl: videoImgUrl,
        executionSteps: executionSteps,
        muscle: muscle,
        tips: tips,
        description: description,
      },
    });
    if (!createdExercise) {
      const message = "Fallo al crear el ejercicio.";
      throw new Error(message);
    }

    const message = "Ejercicio creado correctamente.";
    return message;
  } catch (error) {
    console.error("Error: ", error);
    const message = "Fallo al crear el ejercicio.";
    throw new Error(message);
  }
};
