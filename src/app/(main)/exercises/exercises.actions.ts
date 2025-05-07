"use server";

import { authedProcedure } from "@/app/(auth)/_core/user/user.procedures";
import { revalidatePath } from "next/cache";
import {
  addExerciseToFavoritesSchema,
  removeErxerciseFromFavoriteSchema,
} from "./_core/exercises.types";
import {
  addExerciseToFavoritesUseCase,
  removeExerciseFromFavoritesUseCase,
} from "./_core/exercises.use-cases";

export const addExerciseToFavoritesAction = authedProcedure
  .createServerAction()
  .input(addExerciseToFavoritesSchema.omit({ userId: true })) // <- Validación esquema zod en el lado del servidor. ZSA(Zod Server Action)
  .handler(async ({ ctx, input }) => {
    const { user } = ctx; // <- Obtener el userId de la sesión
    const { userId } = user; // <- Obtener el userId de la sesión
    const response = await addExerciseToFavoritesUseCase({ ...input, userId });

    revalidatePath("/exercises"); // <- Revalidar la ruta de los ejercicios favoritos

    return response;
  });

export const removeExerciseFromFavoritesAction = authedProcedure
  .createServerAction()
  .input(removeErxerciseFromFavoriteSchema.omit({ userId: true }))
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;
    const { userId } = user;
    const response = await removeExerciseFromFavoritesUseCase({
      ...input,
      userId,
    });

    revalidatePath("/exercises");

    return response;
  });
