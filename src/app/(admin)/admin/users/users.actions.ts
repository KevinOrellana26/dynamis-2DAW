"use server";
import { authedProcedure } from "@/app/(auth)/_core/user/user.procedures";
import {
  AddUserFormSchema,
  DeleteUserSchema,
  EditUserFormSchema,
} from "./_core/users.definitions";
import { addUserUseCase, deleteUserUseCase, editUserUseCase } from "./_core/users.use-cases";
import { revalidatePath } from "next/cache";

export const addUserAction = authedProcedure
  .createServerAction()
  .input(AddUserFormSchema)
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;
    if (user.role !== "ADMIN") {
      const message =
        "Solo los usuarios con rol administrador pueden añadir nuevos usuarios.";
      return message;
    }
    const response = await addUserUseCase(input);
    revalidatePath("/admin/users");
    return response;
  });

export const editUserAction = authedProcedure
  .createServerAction()
  .input(EditUserFormSchema)
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;
    if (user.role !== "ADMIN") {
      const message =
        "Solo los usuarios con rol administrador pueden editar usuarios.";
      return message;
    }
    const response = await editUserUseCase(input);
    revalidatePath("/admin/users");
    return response;
  });

export const deleteUserAction = authedProcedure
  .createServerAction()
  .input(DeleteUserSchema)
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;
    if (user.role !== "ADMIN") {
      const message =
        "Solo los usuarios con rol administrador pueden eliminar un usuario.";
      return message;
    }
    const response = await deleteUserUseCase(input);
    revalidatePath("/admin/users");
    return response;
  });
