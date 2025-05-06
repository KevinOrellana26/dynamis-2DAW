"use server";

import { revalidatePath } from "next/cache";
import { addExerciseToFavoritesSchema } from "./_core/exercises.types";
import { addExerciseToFavoritesUseCase } from "./_core/exercises.use-cases";
import { authedProcedure } from "@/app/(auth)/_core/user/user.procedures";

export const addExerciseToFavoritesAction = authedProcedure
  .createServerAction()
  .input(addExerciseToFavoritesSchema.omit({ userId: true })) // <- Validación esquema zod en el ladoW del servidor. ZSA(Zod Server Action)
  .handler(async ({ ctx, input }) => {
    const { user } = ctx; // <- Obtener el userId de la sesión
    const { userId } = user; // <- Obtener el userId de la sesión
    const response = await addExerciseToFavoritesUseCase({ ...input, userId });

    revalidatePath("/exercises"); // <- Revalidar la ruta de los ejercicios favoritos

    return response;
  });
