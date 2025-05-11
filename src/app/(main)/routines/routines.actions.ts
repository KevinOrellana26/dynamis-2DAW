"use server";

import { authedProcedure } from "@/app/(auth)/_core/user/user.procedures";
import { revalidatePath } from "next/cache";
import {
  CreateRoutineFormSchema,
  UpdateExerciseToRoutineSchema,
} from "./_core/routines.types";
import {
  createRoutineUseCase,
  updateExerciseToRoutineUseCase,
} from "./_core/routines.use-cases";

export const createRoutineAction = authedProcedure
  .createServerAction()
  .input(CreateRoutineFormSchema) // <- valida el formulario con el esquema y omite el id del usuario
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;
    const { userId } = user;
    console.log("input recibido", { input });
    console.log("user id", userId);
    const response = await createRoutineUseCase({ ...input, userId });
    console.log("Respuesta del caso de uso:", response);

    revalidatePath("/routines");

    return response;
  });

//Añadir ejercicio a rutina
// export const addExerciseToRoutineAction = authedProcedure
//   .createServerAction()
//   .input(addExerciseToRoutineSchema.omit({ userId: true }))
//   .handler(async ({ ctx, input }) => {
//     const { user } = ctx;
//     const { userId } = user;
//     const response = await addExerciseToRoutineUseCase({ ...input, userId });

//     revalidatePath("/routines");

//     return response;
//   });

//Actualizar datos de ejercicio en rutina
export const updateExerciseToRoutineAction = authedProcedure
  .createServerAction()
  .input(UpdateExerciseToRoutineSchema.omit({ userId: true }))
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;
    const { userId } = user;
    const response = await updateExerciseToRoutineUseCase();

    revalidatePath("/routines");
    return response;
  });

//Eliminar ejercicio de la rutina
// export const removeExerciseFromRoutineAction = authedProcedure
//   .createServerAction()
//   .input(RemoveExercisesFromRoutineSchema.omit({ userId: true }))
//   .handler(async ({ ctx, input }) => {
//     const { user } = ctx;
//     const { userId } = user;
//     const response = await removeExerciseFromRoutineUseCase({
//       ...input,
//       userId,
//     });

//     revalidatePath("/routines");

//     return response;
//   });
