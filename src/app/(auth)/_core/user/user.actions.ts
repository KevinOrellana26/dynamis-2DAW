"use server"
import { createServerAction } from "zsa"
import { loginUser, registerUser } from "./user.db";
import { LoginSchema, RegisterSchema } from "../auth/user.types";


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
        const response = await registerUser(input)
        return response
    });

export const loginUserAction = createServerAction()
    .input(
        LoginSchema
    )
    .handler(async ({ input }) => {
        const response = await loginUser(input)
        return response
    })