"use server";
import { authedProcedure } from "@/app/(auth)/_core/user/user.procedures";
import { NewExerciseSchema } from "./_core/addNewExercise.definitions";
import { addNewExerciseUseCase } from "./_core/addNewExercise.use-cases";

export const addNewExerciseAction = authedProcedure
  .createServerAction()
  .input(NewExerciseSchema)
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;
    const { role } = user;
    const response = await addNewExerciseUseCase({ ...input, role });
    return response;
  });
