"use server";

import { authedProcedure } from "@/app/(auth)/_core/user/user.procedures";
import { revalidatePath } from "next/cache";
import {
  addExerciseToRoutineSchema,
  removeExercisesFromRoutineSchema,
} from "./_core/routines.types";
import {
  addExerciseToRoutineUseCase,
  removeExerciseFromRoutineUseCase,
} from "./_core/routines.use-cases";

export const addExerciseToRoutineAction = authedProcedure
  .createServerAction()
  .input(addExerciseToRoutineSchema.omit({ userId: true }))
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;
    const { userId } = user;
    const response = await addExerciseToRoutineUseCase({ ...input, userId });

    revalidatePath("/routines");

    return response;
  });

export const removeExerciseFromRoutineAction = authedProcedure
  .createServerAction()
  .input(removeExercisesFromRoutineSchema.omit({ userId: true }))
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;
    const { userId } = user;
    const response = await removeExerciseFromRoutineUseCase({
      ...input,
      userId,
    });

    revalidatePath("/routines");

    return response;
  });
