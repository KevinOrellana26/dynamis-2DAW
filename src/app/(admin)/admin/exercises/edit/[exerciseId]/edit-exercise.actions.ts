"use server";
import { authedProcedure } from "@/app/(auth)/_core/user/user.procedures";
import { editExerciseUseCase } from "./_core/edit-exercise.use-cases";
import { revalidatePath } from "next/cache";
import { EditExerciseFormActionSchema } from "./_core/edit-exercise.definitions";

export const editExerciseAction = authedProcedure
  .createServerAction()
  .input(EditExerciseFormActionSchema)
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;
    const { role } = user;
    const response = await editExerciseUseCase(input, role);

    // Revalidar tanto la ruta de admin como la de usuario
    revalidatePath("/admin/exercises");
    revalidatePath("/exercises");
    return response;
  });
