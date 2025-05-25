"use server";
import { createServerAction } from "zsa";
import {
  DeleteProfileSchema,
  EditProfileUserSchema,
  UpdatePasswordProfileUserSchema,
} from "./_core/profile.definitions";
import {
  deleteProfileUseCase,
  updatePasswordProfileUseCase,
  updateProfileUseCase,
} from "./_core/pofile.use-cases";
import { revalidatePath } from "next/cache";
import { authedProcedure } from "@/app/(auth)/_core/user/user.procedures";

export const updateProfileAction = authedProcedure
  .createServerAction()
  .input(EditProfileUserSchema)
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;
    const { userId } = user;
    const response = await updateProfileUseCase({ ...input, userId });
    revalidatePath(`/profile/${userId}`);
    return response;
  });

export const updatePassworProfiledAction = authedProcedure
  .createServerAction()
  .input(UpdatePasswordProfileUserSchema)
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;
    const { userId } = user;
    const response = await updatePasswordProfileUseCase({ ...input, userId });
    revalidatePath(`/profile/${userId}`);
    return response;
  });

export const deleteProfileAction = createServerAction()
  .input(DeleteProfileSchema)
  .handler(async ({ input }) => {
    const { userId } = input;
    const response = await deleteProfileUseCase(userId);
    return response;
  });
