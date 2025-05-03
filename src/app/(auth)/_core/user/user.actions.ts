"use server"
import { createServerAction } from "zsa";
import { LoginSchema, RegisterSchema } from "../auth/user.types";
import { loginUser, registerUser } from "./user.db";
import { logout } from "../auth/auth.actions";
import { IS_DEV } from "@/config/env.config";

// const authedProcedure = createServerActionProcedure()
//     .handler(async () => {
//         try {
//             const { email, id } = await getUser();

//             return {
//                 user: {
//                     email,
//                     id,
//                 }
//             }
//         } catch {
//             throw new Error("User not authenticated")
//         }
//     })

export const registerUserAction = createServerAction()
    .input(
        RegisterSchema // <- Validación esquema zod en el lado del servidor. ZSA(Zod Server Action)
    )
    .handler(async ({ input }) => {
        const response = await registerUser(input)// <- Llama a la función de registro
        return response //<- Devuelve el mensaje para el toast
    });

export const loginUserAction = createServerAction()
    .input(
        LoginSchema
    )
    .handler(async ({ input }) => {
        const response = await loginUser(input)
        return response
    })

export const logoutUserAction = createServerAction()
    .handler(async () => {
        try {
            await logout();
            const message = "Se ha cerrado sesión correctamente"
            return message
        } catch (error) {
            IS_DEV && console.log(error)
            const message = "Error al iniciar sesión"
            throw new Error(message)
        }
    })
