"use server";
import { authedProcedure } from "@/app/(auth)/_core/user/user.procedures";
import { RemoveExerciseSchema } from "./_core/admin.exercises.definitions";
import { removeExerciseUseCase } from "./_core/admin.exercises.use-cases";
import { revalidatePath } from "next/cache";

export const removeExerciseAction = authedProcedure
  .createServerAction()
  .input(RemoveExerciseSchema)
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;
    const response = await removeExerciseUseCase({ ...input, role: user.role });
    revalidatePath("/admin/exercises");
    return response;
  });
