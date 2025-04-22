// import { getUser } from "../user/user.service"

// export const { handlers, signIn, signOut, auth } = NextAuth({
//     providers: [
//         Credentials({
//             // Especificamos qué campos deben ser enviados, añadiendo claves al objeto `credentials`.
//             // Por ejemplo, dominio, nombre de usuario, contraseña, token 2FA, etc.
//             credentials: {
//                 email: { label: "email", type: "email" },
//                 password: { label: "password", type: "password" },
//             },
//             authorize: async (credentials) => {
//                 try {
//                     if (!credentials?.email || !credentials?.password) {
//                         throw new Error("Faltan credenciales")
//                     }

//                     const user = await getUser(
//                         credentials.email as string,
//                         credentials.password as string
//                     )

//                     if (!user) {
//                         throw new Error("Credenciales inválidas.")
//                     }

//                     // Devuelve un objeto del usuario con sus datos
//                     return user
//                 } catch (error) {
//                     console.error("Error en autorización: ", error)
//                     return null;
//                 }
//             }
//         })
//     ],
// })
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { UserSchema } from "../auth/user.types"
import { authConfig } from "./auth.config"
import { z } from "zod";
type UserT = z.infer<typeof UserSchema>;

// consulta el usuario en la base de datos
async function getUser(email: string) {
    try {
        return await prisma.usuario.findUnique({
            where: { email },
            select: { id: true, email: true, nombre: true, password: true, rol: true }
        })
    } catch (error) {
        console.error("Error al recuperar usuario: ", error);
        throw new Error("Error a recuperar usuario")
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                try {
                    // 1. Validación básica
                    if (!credentials?.email || !credentials?.password) return null;

                    // 2. Validación con zod 
                    const parsedCredentials = z
                        .object({
                            email: z.string().email(),
                            password: z.string().min(8)
                        })
                        .safeParse(credentials)

                    if (!parsedCredentials.success) return null

                    // 3. Buscar usuario
                    const user = await getUser(parsedCredentials.data.email);
                    if (!user?.password) return null;

                    //4. compara contraseñas
                    const isValid = await bcrypt.compare(parsedCredentials.data.password, user.password);
                    if (!isValid) return null;

                    //5. Devolver objeto compatible con NextAuth
                    return {
                        id: user.id.toString(),
                        email: user.email,
                        nombre: user.nombre,
                        rol: user.rol
                    } satisfies UserT
                } catch (error) {
                    console.error("Authorization error:", error);
                    return null;
                }

            }
        })
    ]
})