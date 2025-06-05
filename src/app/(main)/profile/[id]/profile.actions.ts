"use server";
import { authedProcedure } from "@/app/(auth)/_core/user/user.procedures";
import { revalidatePath } from "next/cache";
import { createServerAction } from "zsa";
import {
  deleteProfileUseCase,
  updateAvatarProfileUseCase,
  updatePasswordProfileUseCase,
  updateProfileUseCase,
} from "./_core/pofile.use-cases";
import {
  DeleteProfileSchema,
  EditProfileUserSchema,
  UpdateAvatarProfileUserSchema,
  UpdatePasswordProfileUserSchema,
} from "./_core/profile.definitions";
import { getSession } from "@/app/(auth)/_core/auth/auth.actions";

export const updateProfileAction = authedProcedure
  .createServerAction()
  .input(EditProfileUserSchema)
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;
    const { userId } = user;
    const response = await updateProfileUseCase({ ...input, userId });
    //Actualizar la cookie de sesión con el nuevo avatar
    ctx.user.name = input.name;
    await ctx.user.save();
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

export const updateAvatarAction = authedProcedure
  .createServerAction()
  .input(UpdateAvatarProfileUserSchema)
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;
    const { userId } = user;
    const { avatar } = input;

    const response = await updateAvatarProfileUseCase({ userId, avatar });

    //Actualizar la cookie de sesión con el nuevo avatar
    ctx.user.avatar = avatar;
    await ctx.user.save();
    // Revalidar las rutas para que se actualice el avatar en la UI
    revalidatePath(`/profile/${userId}`);
    revalidatePath("/");
    return response;
  });
