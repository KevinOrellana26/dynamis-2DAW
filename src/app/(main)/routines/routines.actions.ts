"use server";

import { authedProcedure } from "@/app/(auth)/_core/user/user.procedures";
import { revalidatePath } from "next/cache";
import {
  // CreateRoutineFormSchema,
  RemoveRoutineSchema,
  UpdateExerciseToRoutineSchema,
  // UpdateExerciseToRoutineSchema,
} from "./_core/routines.definitions";
import {
  createRoutineUseCase,
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
    const response = await updateExerciseToRoutineUseCase();

    revalidatePath("/routines");
    return response;
  });
