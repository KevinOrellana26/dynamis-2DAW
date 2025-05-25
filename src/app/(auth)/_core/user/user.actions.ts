"use server";
import { IS_DEV } from "@/config/env.config";
import { createServerAction, } from "zsa";
import { deleteSession, getSession } from "../auth/auth.actions";
import { LoginSchema, RegisterSchema } from "../auth/user.types";
import { loginUser, registerUser } from "./user.db";


export const registerUserAction = createServerAction()
  .input(
    RegisterSchema // <- Validación esquema zod en el lado del servidor. ZSA(Zod Server Action)
  )
  .handler(async ({ input }) => {
    const response = await registerUser(input); // <- Llama a la función de registro
    return response; //<- Devuelve el mensaje para el toast
  });

export const loginUserAction = createServerAction()
  .input(LoginSchema)
  .handler(async ({ input }) => {
    const response = await loginUser(input);
    return response;
  });

export const logoutUserAction = createServerAction().handler(async () => {
  try {
    await deleteSession();
    const message = "Se ha cerrado sesión correctamente";
    return message;
  } catch (error) {
    IS_DEV && console.log(error);
    const message = "Error al iniciar sesión";
    throw new Error(message);
  }
});
