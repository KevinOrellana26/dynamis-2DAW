"use server";

import { authedProcedure } from "@/app/(auth)/_core/user/user.procedures";
import { revalidatePath, revalidateTag } from "next/cache";
import {
  DeleteExerciseToRoutineSchema,
  RemoveRoutineSchema,
  UpdateExerciseToRoutineSchema,
} from "./_core/routines.definitions";
import {
  createRoutineUseCase,
  deleteExerciseToRoutineUseCase,
  removeRoutineUseCase,
  updateExerciseToRoutineUseCase,
} from "./_core/routines.use-cases";
import { CreateRoutineSchema } from "./_core/routines.definitions";

export const createRoutineAction = authedProcedure
  .createServerAction()
  .input(CreateRoutineSchema.omit({ userId: true })) // <- valida el formulario con el esquema y omite el id del usuario
  .handler(async ({ ctx, input }) => {
    console.log("Datos recibidos en el servidor:", input);
    const { user } = ctx;
    const { userId } = user;
    const response = await createRoutineUseCase({ ...input, userId });

    revalidatePath("/routines");

    return response;
  });

export const removeRoutineAction = authedProcedure
  .createServerAction()
  .input(RemoveRoutineSchema.omit({ userId: true }))
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;
    const { userId } = user;
    const response = await removeRoutineUseCase({ ...input, userId });
    revalidatePath("/routines");
    return response;
  });

//Actualizar datos de ejercicio en rutina
export const updateExerciseToRoutineAction = authedProcedure
  .createServerAction()
  .input(UpdateExerciseToRoutineSchema.omit({ userId: true }))
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;
    const { userId } = user;
    const response = await updateExerciseToRoutineUseCase({
      userId,
      ...input,
    });

    revalidatePath("/routines");
    return response;
  });

export const deleteExerciseToRoutineAction = authedProcedure
  .createServerAction()
  .input(DeleteExerciseToRoutineSchema.omit({ userId: true }))
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;
    const { userId } = user;
    const response = await deleteExerciseToRoutineUseCase({
      userId,
      ...input,
    });

    revalidatePath("/routines");
    return response;
  });
